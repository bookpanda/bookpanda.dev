"use client";

import { translate } from "@/cms/Translate";
import { texts } from "@/cms/texts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Image src="/404_NotFound.png" alt="404" width={500} height={500} />
      <Link href="/">
        <Button variant="outline">
          {translate(texts.notFound.returnHome)}
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
