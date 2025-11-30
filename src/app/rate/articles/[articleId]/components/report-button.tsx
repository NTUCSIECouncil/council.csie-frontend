'use client';

import { MdOutlineReportProblem } from "react-icons/md";
import { useState } from 'react';
import ReportPanel from "@/app/rate/components/report-panel";

interface Props {
  articleId: string;
  articleTitle: string;
}
const ReportButton = ({
  articleId,
  articleTitle,
}: Props): React.JSX.Element => {
  const [showReportPanel, setShowReportPanel] = useState(false);
  return (
    <>
    <button
      className={`flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-xl hover:font-bold transition-colors`}
      onClick={() => setShowReportPanel(true)}
    >
      <MdOutlineReportProblem />
      檢舉文章
    </button>
    {showReportPanel && (
      <ReportPanel
        articleId={articleId}
        articleTitle={articleTitle}
        onClose={() => setShowReportPanel(false)}
      />
    )}
  </>
  );
};

export default ReportButton;
