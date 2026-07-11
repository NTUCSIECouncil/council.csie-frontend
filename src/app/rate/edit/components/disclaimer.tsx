import { FaExclamationTriangle } from 'react-icons/fa';

const Disclaimer = (): React.JSX.Element => {
  return (
    <div className="bg-amber-900 bg-opacity-30 border border-amber-600 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <FaExclamationTriangle className="text-amber-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-200">
          <p className="font-semibold mb-2 text-amber-100">重要聲明</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>請確保您的評價內容客觀、真實，避免惡意攻擊或不實指控</li>
            <li>禁止發布涉及歧視、仇恨言論或不當內容的評價</li>
            <li>我們保留刪除不當貼文的權利，嚴重違規者將面臨帳號停用處分</li>
            <li>請尊重教授與同學，共同維護良好的學術討論環境</li>
          </ul>
          <p className="mt-2 font-medium text-amber-100">
            發布評價即表示您同意遵守以上規範，並承擔相應責任。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
