"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

const Changer = () => {
  const searchParams = useSearchParams();
  function handleChange(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set("display", term);
    window.location.search = params.toString();
  }
  return (
    <Select onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Number" />
      </SelectTrigger>
      <SelectContent>
        {["1", "2", "3", "4", "5"].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Changer;
