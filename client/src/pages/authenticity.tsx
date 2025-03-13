import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Camera, Award } from "lucide-react";

export default function Authenticity() {
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
            Our Authentication Process
          </h1>
          
          <p className="text-xl text-muted-foreground text-center mb-12">
            Every item on LUXE RESALE undergoes a rigorous authentication process
            to ensure absolute authenticity and provenance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Expert Verification
                </h2>
                <p className="text-muted-foreground">
                  Our team of luxury authentication experts examines each item 
                  using advanced techniques and years of experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Documentation Review
                </h2>
                <p className="text-muted-foreground">
                  We verify all ownership documentation, receipts, and 
                  celebrity provenance to ensure complete authenticity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Camera className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Digital Authentication
                </h2>
                <p className="text-muted-foreground">
                  High-resolution imaging and digital authentication technology
                  verify materials, craftsmanship, and unique identifiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-3">
                  Certification
                </h2>
                <p className="text-muted-foreground">
                  Each authenticated item receives a detailed certificate of
                  authenticity with secure digital backup.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Our Guarantee
              </h2>
              <p className="text-muted-foreground">
                We stand behind every item sold on our platform. If an item is
                ever proven to be inauthentic, we will provide a full refund
                including all associated costs. Our reputation is built on trust
                and transparency with both our celebrity partners and customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
