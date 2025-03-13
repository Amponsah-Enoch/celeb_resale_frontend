import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

export default function Shipping() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Shipping Information
          </h1>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Premium Shipping Service</h2>
                <p className="text-muted-foreground mb-4">
                  All items are handled with the utmost care and shipped through premium courier services.
                  High-value items include complimentary white-glove delivery service.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full insurance coverage for all shipments</li>
                  <li>Signature required upon delivery</li>
                  <li>Real-time tracking information</li>
                  <li>White-glove service for items over $10,000</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
                <p className="text-muted-foreground mb-4">
                  We offer worldwide shipping with customs assistance and documentation support.
                  Additional fees may apply based on destination country.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Customs documentation assistance</li>
                  <li>Duty and tax calculation</li>
                  <li>International tracking</li>
                  <li>Express shipping options available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Packaging</h2>
                <p className="text-muted-foreground mb-4">
                  Items are carefully packaged to ensure safe delivery and maintain their condition.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom protective packaging</li>
                  <li>Climate-controlled shipping when required</li>
                  <li>Security seals on all packages</li>
                  <li>Additional packaging options available on request</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
