import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
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
            Terms of Service
          </h1>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Account Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Users must be 18 years or older to create an account</li>
                  <li>Account information must be accurate and current</li>
                  <li>Users are responsible for maintaining account security</li>
                  <li>Accounts may be suspended for policy violations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Purchasing & Bidding</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All bids are binding commitments to purchase</li>
                  <li>Payment must be completed within 24 hours of winning</li>
                  <li>Buyers must complete verification for high-value purchases</li>
                  <li>Shipping details must be accurate and complete</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Authentication & Returns</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All items undergo authentication before shipping</li>
                  <li>3-day inspection period from delivery</li>
                  <li>Returns accepted only for authenticity issues</li>
                  <li>Original packaging must be maintained</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Platform Rules</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>No interference with platform operations</li>
                  <li>No unauthorized data collection</li>
                  <li>No fraudulent activities or misrepresentation</li>
                  <li>Compliance with all applicable laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  LUXE RESALE is not liable for:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  <li>Technical platform interruptions</li>
                  <li>Third-party payment processing issues</li>
                  <li>Shipping delays or damage during transit</li>
                  <li>User disputes or disagreements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
