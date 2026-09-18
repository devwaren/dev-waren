import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type CodeBlockProps = {
	file: string;
	children: string;
	language?: string;
};

const CodeBlock = ({ file, children, language = "tsx" }: CodeBlockProps) => {
	return (
		<div className="code-block mt-5 overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)]">
			<div className="flex items-center border-b border-[#21262d] bg-[#161b22] px-4 py-2.5">
				<span className="ml-4 font-mono text-[11px] text-[#8b949e]">
					{file}
				</span>
			</div>

			<SyntaxHighlighter
				language={language}
				useInlineStyles={false}
				className="code-block__syntax"
				showLineNumbers={false}
				wrapLongLines={false}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};

export { CodeBlock };
