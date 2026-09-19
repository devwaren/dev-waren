import { Mapper } from "@dev-waren/react-form-kit";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import moment from "moment-timezone";
import { useState } from "react";
import { assets } from "#/assets/index.ts";
import { links } from "#/shared/constants";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const manilaTime = moment().tz("Asia/Manila").format("D MMM — HH:mm z");

	return (
		<>
			<header className="sticky top-0 z-90 flex items-center justify-between border-b border-gray-200 bg-white p-4">
				<Link to="/" className="flex gap-4" onClick={() => setIsOpen(false)}>
					<img
						src={assets.devlogo}
						alt="Dev logo"
						className="size-8"
						width={35}
						height={40}
					/>

					<div>
						<p className="font-semibold text-gray-600 lg:text-2xl">
							Waren<span className="text-gray-900">.dev</span>
						</p>

						<p className="text-xs text-gray-400 md:text-sm">{manilaTime}</p>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<Mapper
					listFor="nav-links"
					items={links}
					className="hidden space-x-4 text-gray-500 md:block"
				>
					{(link) => (
						<Link
							to={link.link}
							className="transition-colors duration-200 hover:text-gray-900"
							activeProps={{
								className: "font-semibold text-gray-900",
							}}
							inactiveProps={{
								className: "text-gray-400",
							}}
						>
							{link.label}
						</Link>
					)}
				</Mapper>

				{/* Mobile Menu Button */}
				<button
					type="button"
					aria-label="Open navigation menu"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(true)}
					className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
				>
					<Menu size={22} />
				</button>
			</header>

			{/* Mobile Overlay */}
			<div
				className={`fixed inset-0 z-100 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
					isOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				}`}
				onClick={() => setIsOpen(false)}
				aria-hidden="true"
			/>

			{/* Mobile Sidebar */}
			<aside
				className={`fixed right-0 top-0 z-110 flex h-dvh w-[min(85vw,360px)] flex-col border-l border-gray-200 bg-white shadow-xl transition-transform duration-300 ease-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				aria-label="Mobile navigation"
			>
				{/* Sidebar Header */}
				<div className="flex items-center justify-between border-b border-gray-200 p-5">
					<div>
						<p className="font-semibold text-gray-600">
							Waren<span className="text-gray-900">.dev</span>
						</p>

						<p className="mt-1 text-xs text-gray-400">{manilaTime}</p>
					</div>

					<button
						type="button"
						aria-label="Close navigation menu"
						onClick={() => setIsOpen(false)}
						className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
					>
						<X size={20} />
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-5">
					<p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
						Navigation
					</p>

					<div className="space-y-1">
						<Mapper listFor="mobile-nav-links" items={links}>
							{(link) => (
								<Link
									to={link.link}
									onClick={() => setIsOpen(false)}
									className="block rounded-md px-3 py-3 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
									activeProps={{
										className:
											"block rounded-md bg-gray-100 px-3 py-3 text-sm font-semibold text-gray-900",
									}}
								>
									{link.label}
								</Link>
							)}
						</Mapper>
					</div>
				</nav>

				{/* Sidebar Footer */}
				<div className="border-t border-gray-200 p-5">
					<p className="text-xs leading-5 text-gray-400">
						Thoughtfully engineered digital experiences.
					</p>
				</div>
			</aside>
		</>
	);
}
