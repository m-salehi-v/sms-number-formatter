'use client';

import { useState } from "react";

export default function Home() {
  const [result, setReuslt] = useState<string>('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="file" accept="text/plain"  
        onChange={(e: any) => {
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onload = (e: any) => {
            const text = e.target.result;
            let tmp = text.replace(/(\r\n|\n|\r)/gm, ";");
            tmp = tmp.substring(0, tmp.length - 1);
            setReuslt(tmp)
            console.log(tmp)
          }
          reader.readAsText(file)
        }}
      />
      <textarea className="w-full h-96 p-4 text-black" value={result} 
        onChange={(e: any) => {
          setReuslt(e.target.value)
        }}
       />
    </main>
  )
}
