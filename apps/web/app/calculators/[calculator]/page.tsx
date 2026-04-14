import { notFound } from 'next/navigation'
import { CalculatorProvider } from '../../../contexts/CalculatorContext'
import { BMICalculatorForm } from '../../../components/BMICalculatorForm'
import { BMIResult } from '../../../components/BMIResult'
import { ContentRenderer } from '../../../components/ContentRenderer'
import { bmiCalculatorProtocol } from '@orange-calculator/calculators'

const calculators = {
  'bmi-calculator': bmiCalculatorProtocol,
}

interface CalculatorPageProps {
  params: Promise<{
    calculator: string
  }>
}

export async function generateMetadata({ params }: CalculatorPageProps) {
  const { calculator } = await params
  const protocol = calculators[calculator as keyof typeof calculators]

  if (!protocol) {
    return {
      title: 'Calculator Not Found',
    }
  }

  return {
    title: protocol.seo?.title || protocol.name,
    description: protocol.seo?.description,
    keywords: protocol.seo?.keywords?.join(', '),
    openGraph: {
      title: protocol.seo?.title || protocol.name,
      description: protocol.seo?.description,
      images: protocol.seo?.ogImage ? [{ url: protocol.seo.ogImage }] : undefined,
    },
  }
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { calculator } = await params
  const protocol = calculators[calculator as keyof typeof calculators]

  if (!protocol) {
    notFound()
  }

  return (
    <CalculatorProvider
      calculator={{
        id: protocol.metadata.id,
        name: protocol.metadata.name,
        category: protocol.metadata.category,
        inputSchema: protocol.formFields.map((field) => ({
          name: field.name,
          type: field.type,
          required: field.required,
          options: field.type === 'select' ? [] : undefined,
          defaultValue: field.defaultValue,
        })),
        calculation: {
          validate: protocol.calculation.validate,
          calculate: async (inputs) => {
            return protocol.calculation.calculate(inputs)
          },
        },
      }}
    >
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {protocol.ui?.cardView?.title || protocol.name}
            </h1>
            <p className="text-gray-600">
              {protocol.ui?.cardView?.description}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <BMICalculatorForm />
            <div className="mt-8">
              <BMIResult />
            </div>
          </div>

          {protocol.content?.introduction && (
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Calculator
              </h2>
              <ContentRenderer nodes={protocol.content.introduction} />
            </div>
          )}
        </div>
      </div>
    </CalculatorProvider>
  )
}
