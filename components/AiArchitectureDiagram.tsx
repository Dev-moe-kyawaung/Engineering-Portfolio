'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2, Maximize2, Minimize2 } from 'lucide-react';

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  connections: string[];
}

interface AIArchitectureDiagramProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectDiagrams: Record<string, DiagramNode[]> = {
  pulsesync: [
    { id: 'ui', label: 'UI Layer\nCompose Screens', x: 200, y: 20, width: 120, height: 50, color: '#4A90D9', connections: ['vm'] },
    { id: 'vm', label: 'ViewModel\nState Management', x: 200, y: 100, width: 120, height: 50, color: '#FF6B35', connections: ['usecase'] },
    { id: 'usecase', label: 'Use Cases\nBusiness Logic', x: 200, y: 180, width: 120, height: 50, color: '#2ECC71', connections: ['repo'] },
    { id: 'repo', label: 'Repository\nData Source', x: 200, y: 260, width: 120, height: 50, color: '#E74C3C', connections: [] },
  ],
};

export default function AIArchitectureDiagram({ isOpen, onClose }: AIArchitectureDiagramProps) {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [diagram, setDiagram] = useState<DiagramNode[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleGenerate = async () => {
    if (!input.trim() || isGenerating) return;

    setIsGenerating(true);

    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate architecture diagram based on input
    const lowerInput = input.toLowerCase();
    let nodes: DiagramNode[] = [];

    if (lowerInput.includes('pulsesync') || lowerInput.includes('sync')) {
      nodes = [
        { id: 'ui', label: 'UI Layer\nCompose Screens', x: 200, y: 20, width: 120, height: 50, color: '#4A90D9', connections: ['vm'] },
        { id: 'vm', label: 'ViewModel\nState Management', x: 200, y: 100, width: 120, height: 50, color: '#FF6B35', connections: ['usecase'] },
        { id: 'usecase', label: 'Use Cases\nBusiness Logic', x: 200, y: 180, width: 120, height: 50, color: '#2ECC71', connections: ['repo'] },
        { id: 'repo', label: 'Repository\nData Source', x: 200, y: 260, width: 120, height: 50, color: '#E74C3C', connections: [] },
        { id: 'cache', label: 'Cache\nRoom DB', x: 60, y: 260, width: 100, height: 50, color: '#F1C40F', connections: ['repo'] },
        { id: 'api', label: 'Remote\nFirebase', x: 340, y: 260, width: 100, height: 50, color: '#8E44AD', connections: ['repo'] },
      ];
    } else if (lowerInput.includes('translator') || lowerInput.includes('ai') || lowerInput.includes('ml')) {
      nodes = [
        { id: 'ui', label: 'UI Layer\nCompose UI', x: 200, y: 20, width: 120, height: 50, color: '#4A90D9', connections: ['vm'] },
        { id: 'vm', label: 'ViewModel\nState', x: 200, y: 100, width: 120, height: 50, color: '#FF6B35', connections: ['inference'] },
        { id: 'inference', label: 'Inference Engine\nTFLite + Cloud', x: 200, y: 180, width: 140, height: 50, color: '#2ECC71', connections: ['model'] },
        { id: 'model', label: 'ML Models\nQuantized', x: 200, y: 260, width: 120, height: 50, color: '#E74C3C', connections: [] },
        { id: 'device', label: 'On-Device\nTFLite', x: 60, y: 260, width: 100, height: 50, color: '#F1C40F', connections: ['inference'] },
        { id: 'cloud', label: 'Cloud API\nClaude', x: 340, y: 260, width: 100, height: 50, color: '#8E44AD', connections: ['inference'] },
      ];
    } else {
      nodes = [
        { id: 'input', label: 'User Input', x: 200, y: 20, width: 100, height: 50, color: '#4A90D9', connections: ['process'] },
        { id: 'process', label: 'Processing\nLogic', x: 200, y: 100, width: 100, height: 50, color: '#FF6B35', connections: ['output'] },
        { id: 'output', label: 'Output\nResult', x: 200, y: 180, width: 100, height: 50, color: '#2ECC71', connections: [] },
      ];
    }

    setDiagram(nodes);
    setIsGenerating(false);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-20 right-6 z-50 blueprint-card rounded-none overflow-hidden shadow-2xl
                     ${isFullscreen ? 'inset-6' : 'w-96 h-[500px]'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#4A90D9]/20 bg-[#1E3A5F]">
            <div className="flex items-center gap-3">
              <Bot size={18} className="text-[#F5F0E8]" />
              <div>
                <h3 className="text-sm font-mono text-[#F5F0E8] uppercase tracking-wider">Blueprint AI</h3>
                <p className="text-[10px] font-mono text-[#4A90D9]">Architecture Diagram Generator</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 text-[#4A90D9] hover:text-[#F5F0E8] transition-colors"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button onClick={onClose} className="p-1.5 text-[#4A90D9] hover:text-[#F5F0E8] transition-colors">
                ✕
              </button>
            </div>
          </div>

          {/* Diagram Canvas */}
          <div className="flex-1 overflow-auto p-4 bg-[#F5F0E8]/50">
            {diagram.length > 0 ? (
              <svg ref={svgRef} viewBox="0 0 500 350" className="w-full h-auto">
                {/* Connection Lines */}
                {diagram.map((node) =>
                  node.connections.map((targetId) => {
                    const target = diagram.find((n) => n.id === targetId);
                    if (!target) return null;
                    return (
                      <line
                        key={`${node.id}-${targetId}`}
                        x1={node.x + node.width / 2}
                        y1={node.y + node.height}
                        x2={target.x + target.width / 2}
                        y2={target.y}
                        stroke="#4A90D9"
                        strokeWidth="1.5"
                        strokeDasharray="5 3"
                      />
                    );
                  })
                )}

                {/* Nodes */}
                {diagram.map((node) => (
                  <g key={node.id}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.width}
                      height={node.height}
                      rx="4"
                      fill="rgba(245,240,232,0.95)"
                      stroke={node.color}
                      strokeWidth="2"
                    />
                    <text
                      x={node.x + node.width / 2}
                      y={node.y + node.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#1E3A5F"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      {node.label.split('\n').map((line, i) => (
                        <tspan key={i} x={node.x + node.width / 2} dy={i === 0 ? 0 : 12}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Bot size={40} className="mx-auto text-[#4A90D9] mb-4" />
                  <p className="text-sm font-mono text-[#4A90D9] mb-2">Generate Architecture Diagram</p>
                  <p className="text-xs font-mono text-[#4A90D9]/50">Ask about any project to see its technical blueprint</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#4A90D9]/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder="e.g., Show PulseSync architecture..."
                className="flex-1 px-3 py-2 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                           text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !input.trim()}
                className="px-4 bg-[#1E3A5F] text-[#F5F0E8] hover:bg-[#162E4A] transition-all disabled:opacity-50"
              >
                {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
