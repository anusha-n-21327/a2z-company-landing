"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { showSuccess } from "@/utils/toast";

const pricingTiers = [
  {
    name: "Basic",
    price: "₹2,499",
    description: "For individuals and small teams getting started.",
    features: ["1 Product Access", "Limited Support", "10GB Storage"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "₹6,599",
    description: "For growing businesses that need more power.",
    features: ["All Products Access", "Priority Support", "100GB Storage", "Advanced Analytics"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: ["All Pro Features", "Dedicated Support", "Unlimited Storage", "Custom Integrations"],
    isPopular: false,
  },
];

const Pricing = () => {
  const handlePayment = () => {
    showSuccess("Payment Successful – Thank you for your purchase!");
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Flexible Pricing for Teams of All Sizes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Choose the plan that's right for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${tier.isPopular ? 'border-2 border-primary relative' : ''}`}>
              {tier.isPopular && <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full">Most Popular</div>}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-4xl font-bold">{tier.price}<span className="text-lg font-normal text-gray-500">{tier.price.startsWith('₹') ? '/mo' : ''}</span></p>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className={`w-full ${tier.isPopular ? '' : 'bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 text-white'}`}>
                      Buy Now
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Your Purchase</AlertDialogTitle>
                      <AlertDialogDescription>
                        You are about to purchase the {tier.name} plan for {tier.price}/mo. Do you want to proceed with the payment?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handlePayment}>Confirm Payment</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;