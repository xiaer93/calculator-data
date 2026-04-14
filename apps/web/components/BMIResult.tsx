'use client'

import React from 'react'
import { useCalculator } from '../contexts/CalculatorContext'

export function BMIResult() {
  const { result } = useCalculator()

  if (!result) {
    return null
  }

  const { bmi, category, color } = result

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    red: 'bg-red-100 text-red-800 border-red-200',
  }

  const badgeClass = colorClasses[color] || colorClasses.blue

  return (
    <div className="space-y-4">
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your BMI Result
        </h3>

        <div className="flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {bmi}
            </div>
            <div className={`inline-block px-4 py-2 rounded-full border-2 ${badgeClass} font-medium`}>
              {category}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600 text-center">
            Your BMI is <span className="font-semibold text-gray-900">{bmi}</span>, which is in the{' '}
            <span className="font-semibold text-gray-900">{category}</span> range
          </p>
        </div>
      </div>
    </div>
  )
}
