'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface CalculatorContextValue {
  inputs: Record<string, any>
  result: Record<string, any> | null
  loading: boolean
  error: string | null
  setInputs: (inputs: Record<string, any>) => void
  calculate: () => Promise<void>
  reset: () => void
}

const CalculatorContext = createContext<CalculatorContextValue | undefined>(undefined)

interface CalculatorProviderProps {
  children: ReactNode
  calculator: {
    id: string
    name: string
    category: string
    calculation: {
      validate: (inputs: Record<string, any>) => { valid: boolean; errors: Record<string, string> }
      calculate: (inputs: Record<string, any>) => Promise<Record<string, any>>
    }
    inputSchema: {
      name: string
      type: 'text' | 'number' | 'boolean' | 'select'
      required: boolean
      options?: string[]
      defaultValue?: any
    }[]
  }
}

export function CalculatorProvider({ children, calculator }: CalculatorProviderProps) {
  const [inputs, setInputs] = useState<Record<string, any>>({})
  const [result, setResult] = useState<Record<string, any> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const calculate = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      // Validate inputs
      const validation = calculator.calculation.validate(inputs)
      if (!validation.valid) {
        const errorMessages = Object.values(validation.errors).join(', ')
        setError(errorMessages)
        return
      }

      // Simulate 300ms processing delay
      await new Promise(resolve => setTimeout(resolve, 300))

      // Perform calculation
      const calculationResult = await calculator.calculation.calculate(inputs)
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
    setInputs({})
    setResult(null)
    setError(null)
  }, [])

  const value: CalculatorContextValue = {
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
