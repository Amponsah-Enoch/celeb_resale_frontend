import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "How do you verify item authenticity?",
    answer: "Every item undergoes a rigorous authentication process by our expert team. We use advanced verification technology and detailed documentation to ensure each piece's authenticity. Items come with a certificate of authenticity and detailed provenance."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 3-day inspection period for all items. If the item doesn't match the description or authenticity is questioned, we provide a full refund. However, all sales are final after the inspection period."
  },
  {
    question: "How does bidding work?",
    answer: "Place bids by entering an amount higher than the current bid plus the minimum increment. Automatic bidding is available up to your maximum amount. Winning bidders are notified immediately and have 24 hours to complete the purchase."
  },
  {
    question: "What percentage goes to charity?",
    answer: "The charity contribution varies by item and celebrity preference, typically ranging from 10% to 50% of the sale price. The exact percentage is clearly displayed on each item's listing."
  },
  {
    question: "How is shipping handled?",
    answer: "All items are fully insured and shipped via premium courier services. High-value items include complimentary white-glove delivery. International shipping is available for most items."
  }
];

export default function FAQ() {
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
            Frequently Asked Questions
          </h1>
          
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
