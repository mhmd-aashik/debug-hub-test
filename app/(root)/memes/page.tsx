import { Button } from "@/components/ui/button";
import { IMeme } from "@/database/meme.model";
import { GellAllMeme } from "@/lib/actions/meme.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MemePage = async () => {
  const result = await GellAllMeme();
  console.log(result, "result meme");

  return (
    <>
      <div className="mb-8 flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Explore Memes</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {result.map((meme: IMeme) => (
          <div key={meme.id}>
            <Image
              src={meme.url}
              alt={meme.name}
              width={500}
              height={500}
              className="max-h-[350px] max-w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MemePage;
