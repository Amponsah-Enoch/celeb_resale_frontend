import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
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
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
                <p className="text-muted-foreground">
                  We collect information necessary to provide our services, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  <li>Account information (name, email, shipping address)</li>
                  <li>Transaction data (purchase history, bidding activity)</li>
                  <li>Payment information (processed securely through our partners)</li>
                  <li>Device and usage information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
                <p className="text-muted-foreground">
                  Your information is used to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  <li>Process transactions and deliver items</li>
                  <li>Verify authenticity and provenance</li>
                  <li>Communicate about products and services</li>
                  <li>Improve our platform and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                <p className="text-muted-foreground">
                  We implement strict security measures to protect your data:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  <li>Encryption of sensitive information</li>
                  <li>Regular security audits</li>
                  <li>Limited employee access</li>
                  <li>Secure data storage facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
