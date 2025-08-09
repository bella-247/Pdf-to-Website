// src/components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    "Upload your PDF Resume",
    "Pick a design template",
    "Publish your personal website",
  ];

  return (
    <section id="how" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((s, i) => (
            <div key={i} className="p-6 border rounded-lg dark:border-gray-700">
              <span className="text-4xl font-bold text-purple-500">{i + 1}</span>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
