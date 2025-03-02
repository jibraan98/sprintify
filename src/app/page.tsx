import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-sky-500">
      Hello there general Kenobi
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
}
