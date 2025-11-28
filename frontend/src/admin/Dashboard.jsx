// src/admin/Dashboard.jsx
import React from "react";

/*
    Dashboard.jsx
    - Self-contained admin dashboard layout tailored to the provided description.
    - Uses Tailwind CSS classes (ensure Tailwind is configured in your project).
*/

const Sidebar = () => {
    const menu = [
        { name: "Dashboard", key: "dashboard", active: true, icon: DashboardIcon },
        { name: "Products", key: "products", active: false, icon: ShoppingCartIcon },
        { name: "Feedback", key: "feedback", active: false, icon: MegaphoneIcon },
        { name: "Clients", key: "clients", active: false, icon: UsersIcon },
        { name: "Orders", key: "orders", active: false, icon: TruckIcon },
        { name: "Logout", key: "logout", active: false, icon: LogoutIcon },
    ];

    return (
        <aside className="w-72 min-h-screen p-6 bg-white rounded-r-xl shadow-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                    {/* Simple avatar illustration */}
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeWidth="1.5" />
                        <path d="M4 20a8 8 0 0116 0" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Admin</div>
                    <div className="font-semibold">Admin.Raqmiya</div>
                </div>
            </div>

            <nav className="space-y-3">
                {menu.map((m) => {
                    const Icon = m.icon;
                    return (
                        <button
                            key={m.key}
                            className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition
                                ${m.active ? "bg-[#002B5B] text-white" : "bg-white text-gray-600 border border-gray-100"}
                            `}
                        >
                            <span className="w-6 h-6 flex items-center justify-center">
                                <Icon className={m.active ? "text-white" : "text-gray-400"} />
                            </span>
                            <span className="flex-1">{m.name}</span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

const Banner = () => {
    return (
        <section className="rounded-xl bg-gradient-to-r from-[#002B5B] via-[#0a4d80] to-[#2b7fbf] text-white p-6 mb-6 relative overflow-hidden">
            {/* Abstract shapes */}
            <svg className="absolute -right-8 -top-8 opacity-20" width="220" height="220" viewBox="0 0 220 220" fill="none">
                <circle cx="110" cy="110" r="110" fill="white" />
            </svg>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-semibold">
                        Welcome Back To <span className="text-yellow-400">Your Dashboard</span> Admin!
                    </h1>
                    <p className="mt-2 text-sm text-blue-100 max-w-xl">
                        Bonjour Admin.Raqmiya — here is a quick overview of activity and important updates on your platform.
                    </p>
                </div>

                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                    Last login: <span className="font-medium">Today, 09:12 AM</span>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ bgClass, title, value, icon: Icon }) => {
    return (
        <div className={`p-4 rounded-xl shadow-sm flex items-center gap-4 ${bgClass}`}>
            <div className="p-3 rounded-md bg-white/20">
                <Icon className="text-white" />
            </div>
            <div>
                <div className="text-sm text-white/90">{title}</div>
                <div className="text-2xl font-semibold text-white">{value}</div>
            </div>
        </div>
    );
};

const Notifications = () => {
    const items = new Array(3).fill({
        text: "Wohoo, a customer just placed a new order.",
    });

    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-semibold mb-3">Latest Notifications</h3>
            <div className="space-y-3">
                {items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4 border border-gray-100 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#002B5B] text-white">
                                <IdeaIcon />
                            </div>
                            <div className="text-sm text-gray-700">{it.text}</div>
                        </div>
                        <a className="text-blue-600 text-sm font-medium">Discover More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* Icons (simple inline SVGs) */
function DashboardIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function ShoppingCartIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18" cy="20" r="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function MegaphoneIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M3 11v2l9 4V7L3 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 8l6-2v10l-6-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function UsersIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M16 11a4 4 0 10-8 0" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function TruckIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M1 3h13v13H1z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 8h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="19" r="1" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18" cy="19" r="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function LogoutIcon({ className = "text-gray-400" }) {
    return (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 19H6a2 2 0 01-2-2V7a2 2 0 012-2h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IdeaIcon({ className = "text-white" }) {
    return (
        <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function ComputerThumbIcon({ className = "text-white" }) {
    return (
        <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 10l1.5 2L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function Box3DIcon({ className = "text-white" }) {
    return (
        <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M12 3l8 4.5v9L12 21 4 16.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 12V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
function DeliveryTruckIcon({ className = "text-white" }) {
    return (
        <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none">
            <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 8h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-[#F6FBFE] p-6">
            <div className="max-w-7xl mx-auto flex gap-6">
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    <main className="flex-1">
                        <Banner />

                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <StatCard
                                    bgClass="bg-[#2fd6a7]" // mint green
                                    title="Total Feedback number"
                                    value="55"
                                    icon={ComputerThumbIcon}
                                />
                                <StatCard
                                    bgClass="bg-[#f2d8a8]" // yellow/beige
                                    title="Total Products number"
                                    value="07"
                                    icon={Box3DIcon}
                                />
                                <StatCard
                                    bgClass="bg-[#84c6ff]" // light blue
                                    title="Total orders number"
                                    value="55"
                                    icon={DeliveryTruckIcon}
                                />
                            </div>

                            <div>
                                <Notifications />
                            </div>
                        </section>

                        <section>
                            <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                                <h3 className="font-semibold mb-3">Quick Overview</h3>
                                <p className="text-sm text-gray-600">Additional content, charts or activity feed can be placed here. Responsive and modern design—use Tailwind utilities to extend.</p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
