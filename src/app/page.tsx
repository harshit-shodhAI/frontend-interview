"use client";

import { useState, useEffect, useMemo } from 'react';
import { Question } from '@/types/question';
import { Visualisation } from '@/types/visualisation';
import question_data from '@/data/question.json';
import visualisation_data from '@/data/visualisation.json';
import Latex from "react-latex-next";
import Visualiser from '@/components/Visualiser';
import FloatingNav from '@/components/FloatingNav';
import "katex/dist/katex.min.css";

function getLastStartIndex({ visualization }: { visualization: Visualisation }) {
  const startOrders = visualization.elements.flatMap(element => element.frames.map(frame => frame.start_order));
  return Math.max(...startOrders);
}

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [question, setQuestion] = useState<Question>();
  const [visualization, setVisualization] = useState<Visualisation>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleForward = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, startIndex));
  };

  useEffect(() => {
    setLoading(true);
    setQuestion(question_data);
    setVisualization(visualisation_data);
    setStartIndex(getLastStartIndex({ visualization: visualisation_data }));
    setLoading(false);
  }, [question, visualization]);

  const renderedQuestion = useMemo(() => {
    if (!question?.question) return null;
    if (typeof window === 'undefined') return null;
    return <Latex>{question.question.replace(/\\begin{equation}/g, "\\[").replace(/\\end{equation}/g, "\\]")}</Latex>;
  }, [question]);

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen overflow-hidden">

      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-4">Loading data...</p>
          </div>
        </div>
      )}

      <div className='flex h-[15%] w-[90%] m-4 p-4 text-center justify-center items-center'>
        {renderedQuestion || question?.question}
      </div>
      <div className='h-[80%] w-[80%] m-4 overflow-y-auto overflow-x-hidden'>
        {visualization && <Visualiser visualization={visualization} currIndex={currentIndex} />}
      </div>
      <FloatingNav onBack={handleBack} onForward={handleForward} onRefresh={() => window.location.reload()} />
    </div >
  );
}
