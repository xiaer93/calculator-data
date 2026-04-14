'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface CalculatorInputs {
  [key: string]: string | number | boolean
}

export interface CalculatorResult {
  [key: string]: any
}

export interface CalculatorProtocol {
  id: string
  name: string
  category: string
  calculate: (inputs: CalculatorInputs) => Promise<CalculatorResult>
  inputSchema: {
    name: string
    type: 'text' | 'number' | 'boolean' | 'select'
    required: boolean
    options?: string[]
    defaultValue?: any
  }[]
}

interface CalculatorContextType {
  inputs: CalculatorInputs
  result: CalculatorResult | null
  loading: boolean
  error: string | null
  setInputs: (inputs: CalculatorInputs | ((prev: CalculatorInputs) => CalculatorInputs)) => void
  calculate: () => Promise<void>
  reset: () => void
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined)

interface CalculatorProviderProps {
  children: ReactNode
  calculator: CalculatorProtocol
}

export function CalculatorProvider({ children, calculator }: CalculatorProviderProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    const initialInputs: CalculatorInputs = {}
    calculator.inputSchema.forEach(field => {
      if (field.defaultValue !== undefined) {
        initialInputs[field.name] = field.defaultValue
      } else if (field.type === 'boolean') {
        initialInputs[field.name] = false
      } else if (field.type === 'number') {
        initialInputs[field.name] = 0
      } else {
        initialInputs[field.name] = ''
      }
    })
    return initialInputs
  })

  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const calculate = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const calculationResult = await calculator.calculate(inputs)
      setResult(calculationResult)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '计算失败，请重试'
      setError(errorMessage)
      setResult(null)
    } finally {
      setLoading(false)
    }
  }, [calculator, inputs])

  const reset = useCallback(() => {
    const initialInputs: CalculatorInputs = {}
    calculator.inputSchema.forEach(field => {
      if (field.defaultValue !== undefined) {
        initialInputs[field.name] = field.defaultValue
      } else if (field.type === 'boolean') {
        initialInputs[field.name] = false
      } else if (field.type === 'number') {
        initialInputs[field.name] = 0
      } else {
        initialInputs[field.name] = ''
      }
    })
    setInputs(initialInputs)
    setResult(null)
    setError(null)
  }, [calculator])

  const value: CalculatorContextType = {
    inputs,
    result,
    loading,
    error,
    setInputs,
    calculate,
    reset,
  }

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalculator() {
  const context = useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider')
  }
  return context
}
