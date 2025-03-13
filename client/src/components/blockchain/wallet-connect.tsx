import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Wallet, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const connectWallet = async () => {
    try {
      // Simulated connection
      setIsConnected(true);
      setAddress("0x1234...5678");
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to your wallet",
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      className="flex items-center gap-2"
    >
      {!isConnected ? (
        <Button 
          onClick={connectWallet}
          className="flex items-center gap-2"
        >
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            {address}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      )}
    </motion.div>
  );
}