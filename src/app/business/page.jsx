"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../footer/page";
import Navbar from "../navbar/page";

const formSchema = z.object({
  name: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email" }),
  company: z.string().min(2, { message: "Required" }),
  phone: z.string().optional(),
  projectType: z.string({ required_error: "Required" }),
  message: z.string().min(10, { message: "Min 10 characters" }),
});

const teamMembers = [
  {
    name: "Manoj Adhikari",
    role: "Frontend Developer",
    expertise: "React, Next.js",
    image: "/ishan.jpg",
  },
  {
    name: "Prasanna Wagle",
    role: "Project Management, React Developer",
    expertise: "React, Project Management",
    image: "/prasanna.jpg",
  },
  {
    name: "Ritika Shrestha",
    role: "Digital Marketing Specialist",
    expertise: "SEO, Content Marketing",
    image: "/ishan.jpg",
  },
  {
    name: "Rajnish Adhikari",
    role: "Data Analyst",
    expertise: "Python, R, Tableau",
    image: "/rajnish.jpg",
  },
  {
    name: "Ritik Gaire",
    role: "Backend Developer",
    expertise: "Node.js, Express, MongoDB",
    image: "/ishan.jpg",
  },
  {
    name: "Sofiya Pandey",
    role: "UI/UX Designer",
    expertise: "Sketch, figma",
    image: "/sofiya.jpg",
  },
];

export default function BusinessLandingPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  // <Image
  //   src="/ksvn.png"
  //   alt="WebNova AI Logo"
  //   width={160}
  //   height={150}
  //   className="bg-white rounded-lg p-2"
  // />;
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Your Business Success
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our comprehensive business solutions hub. At KSVA TECH,
          we're dedicated to propelling your organization towards unprecedented
          growth and efficiency.
        </p>
      </section>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <section className="w-full max-w-4xl mx-auto pb-[7%]">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Expertise</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Meet our team of experts who bring a wealth of experience across
          various domains.
        </p>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Card className="flex flex-col justify-between h-69 p-4 shadow-md border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex justify-center text-xl font-semibold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="flex justify-center text-gray-500">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <CardContent>
                  <p className="flex justify-center text-sm text-gray-600 max-w-xs mx-auto">
                    Expertise: {member.expertise}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
    </div>
  );
}
