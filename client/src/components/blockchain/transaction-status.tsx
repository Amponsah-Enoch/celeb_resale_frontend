import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface TransactionStatusProps {
  hash: string;
  status: "pending" | "confirmed" | "failed";
  timestamp: Date;
  action: string;
}

export default function TransactionStatus({
  hash,
  status,
  timestamp,
  action
}: TransactionStatusProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: "text-yellow-500",
      label: "Pending"
    },
    confirmed: {
      icon: CheckCircle2,
      color: "text-green-500",
      label: "Confirmed"
    },
    failed: {
      icon: XCircle,
      color: "text-red-500",
      label: "Failed"
    }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <motion.div variants={fadeIn}>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StatusIcon className={`h-5 w-5 ${statusConfig[status].color}`} />
              <span className="font-medium">{action}</span>
            </div>
            <Badge variant="outline">
              {statusConfig[status].label}
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            <p>Hash: {hash}</p>
            <p>Time: {timestamp.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
