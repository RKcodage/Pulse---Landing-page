import { comparisonFeatures } from "./config/comparison.config";
import { TableHeader } from "./components/TableHeader";
import { FeatureRow } from "./components/FeatureRow";

export default function ComparisonTable() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Comparaison des plans</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trouvez le plan parfait
          </h2>
          <p className="text-gray-400 text-lg">
            Comparez nos plans pour trouver celui qui convient le mieux à vos besoins. Tous
            les plans incluent nos fonctionnalités essentielles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <TableHeader />
              <div className="space-y-4">
                {comparisonFeatures.map((feature, index) => (
                  <FeatureRow key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
