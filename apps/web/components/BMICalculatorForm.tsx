'use client'

import React from 'react'
import { Input } from '@orange-calculator/ui'
import { useCalculator } from '../contexts/CalculatorContext'

export function BMICalculatorForm() {
  const { inputs, setInputs, error, loading, calculate } = useCalculator()

  const handleInputChange = (field: string, value: string) => {
    setInputs({
      ...inputs,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculate()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Height (cm)"
        type="number"
        placeholder="175"
        value={inputs.height || ''}
        onChange={(e) => handleInputChange('height', e.target.value)}
        min={100}
        max={250}
        required
        error={error?.includes('Height') ? error : undefined}
      />

      <Input
        label="Weight (kg)"
        type="number"
        placeholder="70"
        value={inputs.weight || ''}
        onChange={(e) => handleInputChange('weight', e.target.value)}
        min={20}
        max={300}
        required
        error={error?.includes('Weight') ? error : undefined}
      />

      {error && !error.includes('Height') && !error.includes('Weight') && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Calculating...' : 'Calculate BMI'}
      </button>
    </form>
  )
}
