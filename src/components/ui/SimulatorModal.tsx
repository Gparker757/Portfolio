import React, { useState } from 'react';

interface SimulatorModalProps {
  open: boolean;
  onClose: () => void;
}

const getMockResult = (content: string) => {
  if (!content.trim()) return null;
  // Simple mock logic for demo
  const score = Math.min(100, Math.floor(content.length * 2 + Math.random() * 30));
  let verdict = 'Potentially Viral!';
  if (score < 40) verdict = 'Needs More Impact';
  else if (score < 70) verdict = 'Good, but Could Be Sharper';
  return { score, verdict };
};

const SimulatorModal: React.FC<SimulatorModalProps> = ({ open, onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{ score: number; verdict: string } | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-lg border border-purple-500/30 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Viral Moment Simulator</h2>
        <textarea
          className="w-full h-32 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-4 resize-none focus:outline-none focus:border-purple-500"
          placeholder="Paste your tweet, post, or campaign idea here..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 mb-4"
          onClick={() => setResult(getMockResult(input))}
        >
          Simulate
        </button>
        {result && (
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-purple-500/30">
            <div className="text-4xl font-bold text-pink-400 mb-2">Viral Score: {result.score}/100</div>
            <div className="text-lg text-white font-semibold mb-1">{result.verdict}</div>
            <div className="text-gray-400 text-sm">(This is a mock analysis. For demo purposes only.)</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulatorModal; 