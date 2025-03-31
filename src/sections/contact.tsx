import type React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/custom/sectionHeader";

interface ContactProps {
  isActive: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC<ContactProps> = ({ isActive }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    reset();
  };

  const openSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen flex items-center pb-20 justify-center bg-gradient-to-b from-white/80 to-white/60"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          title="Get in Touch"
          subtitle="Let's turn ideas into reality"
          isActive={isActive}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-8 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl font-semibold text-gray-800 mb-[0.75rem]">
                      Contact Information
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-6">
                      I'm always excited to connect, collaborate, and discuss
                      new opportunities. Whether you have a project in mind or
                      just want to say hello, feel free to reach out!
                    </CardDescription>
                  </CardHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-primary" />
                      <div className="text-gray-600 ">
                        kacperrebosz@gmail.com
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          openSocialLink(
                            "https://www.linkedin.com/in/kacper-r%C4%99bosz-a09588287/"
                          )
                        }
                        className="transform transition-all duration-200 hover:scale-125"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          openSocialLink("https://github.com/KacperRebosz")
                        }
                        className="transform transition-all duration-200 hover:scale-125"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <CardHeader className="px-0">
                    <CardTitle className="text-2xl font-semibold text-gray-800">
                      Send a Message
                    </CardTitle>
                  </CardHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Input
                        {...register("name")}
                        type="text"
                        placeholder="Your Name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="Your Email"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <Input
                        {...register("subject")}
                        type="text"
                        placeholder="Subject"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <span className="text-red-500 text-sm">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <Textarea
                        {...register("message")}
                        placeholder="Your Message"
                        className="min-h-[100px]"
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <span className="text-red-500 text-sm">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
