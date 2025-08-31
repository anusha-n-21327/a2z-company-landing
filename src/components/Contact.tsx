"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDialogOpen(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 my-8">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@a2zcompany.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </div>

            <Card className="shadow-lg text-left bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>We'd love to hear from you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent Successfully</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Contact;