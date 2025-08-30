"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2020', innovationIndex: 4000 },
  { name: '2021', innovationIndex: 4500 },
  { name: '2022', innovationIndex: 5200 },
  { name: '2023', innovationIndex: 6100 },
  { name: '2024', innovationIndex: 7500 },
];

const Research = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pioneering Research</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Our commitment to research and development drives our innovation forward.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Innovation Growth Index</CardTitle>
            <CardDescription>Tracking our progress in key technological areas over the years.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Line type="monotone" dataKey="innovationIndex" stroke="url(#colorUv)" strokeWidth={3} />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Research;