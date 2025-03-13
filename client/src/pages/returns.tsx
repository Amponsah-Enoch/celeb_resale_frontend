import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, PackageCheck, RefreshCw } from "lucide-react";

export default function Returns() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Returns Policy
          </h1>

          <p className="text-xl text-muted-foreground text-center mb-12">
            We want you to be completely satisfied with your purchase.
            Here's everything you need to know about our returns process.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  3-Day Inspection Period
                </h2>
                <p className="text-muted-foreground">
                  You have 3 days from delivery to inspect your item and confirm
                  its condition and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <AlertCircle className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Return Reasons
                </h2>
                <p className="text-muted-foreground">
                  Returns are accepted for authenticity concerns, significant
                  condition discrepancies, or material misrepresentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <PackageCheck className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Return Requirements
                </h2>
                <p className="text-muted-foreground">
                  Items must be returned in original condition with all tags,
                  certificates, and packaging materials intact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <RefreshCw className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Refund Process
                </h2>
                <p className="text-muted-foreground">
                  Once your return is approved, we'll process your refund
                  including original shipping costs within 5 business days.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Return Process Steps
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                <li>
                  Contact our support team within the 3-day inspection period
                </li>
                <li>
                  Receive a return authorization and shipping label
                </li>
                <li>
                  Package the item securely with all original materials
                </li>
                <li>
                  Ship the item back using the provided label
                </li>
                <li>
                  Our authentication team will inspect the returned item
                </li>
                <li>
                  Receive your refund once the return is approved
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Non-Returnable Items
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Items damaged after delivery</li>
                <li>Items with removed tags or altered condition</li>
                <li>Items returned after the 3-day inspection period</li>
                <li>Custom or personalized items</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
