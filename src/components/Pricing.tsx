"use client";

import { useState } from "react";
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
  const [purchasedPlans, setPurchasedPlans] = useState<string[]>([]);

  const handlePayment = (planName: string) => {
    showSuccess("Payment Successful – Thank you for your purchase!");
    setPurchasedPlans([...purchasedPlans, planName]);
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Flexible Pricing for Teams of All Sizes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 md:text-xl">
            Choose the plan that's right for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => {
            const isPurchased = purchasedPlans.includes(tier.name);
            return (
              <Card key={tier.name} className={`flex flex-col bg-slate-900/50 border transition-all duration-300 hover:-translate-y-1 ${tier.isPopular ? 'border-cyan-400 [box-shadow:0_0_20px_theme(colors.cyan.400)]' : 'border-slate-700'}`}>
                {tier.isPopular && <div className="absolute -top-4 right-4 bg-cyan-400 text-slate-900 px-3 py-1 text-sm font-bold rounded-full">Most Popular</div>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100">{tier.name}</CardTitle>
                  <p className="text-4xl font-bold text-slate-50">{tier.price}<span className="text-lg font-normal text-slate-400">{tier.price.startsWith('₹') ? '/mo' : ''}</span></p>
                  <CardDescription className="text-slate-400">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-lime-400 mr-2" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {isPurchased ? (
                    <Button disabled className="w-full bg-green-600 text-white cursor-not-allowed">
                      Purchased
                    </Button>
                  ) : (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className={`w-full ${tier.isPopular ? 'bg-cyan-500 text-white hover:bg-cyan-400' : 'bg-slate-800 text-white border border-cyan-500 hover:bg-cyan-500 hover:text-white'}`}>
                          Buy Now
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-slate-900 border-cyan-500">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-slate-100">Confirm Your Purchase</AlertDialogTitle>
                          <AlertDialogDescription className="text-slate-400">
                            You are about to purchase the {tier.name} plan for {tier.price}/mo. Do you want to proceed with the payment?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handlePayment(tier.name)}>Confirm Payment</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;