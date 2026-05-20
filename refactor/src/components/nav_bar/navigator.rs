use leptos::*;
use super::linked_route::LinkedRoute;
use super::helpers::all_routes;
use crate::models::constants::TITLE;

#[component]
pub fn Navigator() -> impl IntoView {
    let (is_open, set_open) = create_signal(false);

    let nav_style = "fixed top-0 z-30 w-full backdrop-blur-md bg-everforest-bg0/90 border-b border-everforest-bg3 transition-all duration-300 ease-smooth";
    let div_style = "flex items-center justify-between mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4";
    let title_style = "md:text-2xl text-lg font-extrabold text-everforest-green tracking-tight";

    let burger_class = move || {
        if is_open.get() {
            "absolute top-full right-4 z-50 flex flex-col p-4 mt-2 space-y-2 bg-everforest-bg1 rounded-lg shadow-xl border border-everforest-bg3 animate-fade-in-up"
        } else {
            "hidden top-full right-4 z-50 flex flex-col p-4 mt-2 space-y-2 bg-everforest-bg1 rounded-lg shadow-xl border border-everforest-bg3"
        }
    };

    view! {
        <header class=nav_style>
            <div class=div_style>
                <span class=title_style>{TITLE}</span>
                <div class="flex items-center space-x-2">
                    <ul class="hidden space-x-1 md:inline-flex">
                        {all_routes().iter().map(|route| {
                            view! {
                                <LinkedRoute route=*route set_open=set_open />
                            }
                        }).collect::<Vec<_>>()}
                    </ul>
                    <div class="inline-flex md:hidden">
                        <button
                            class="flex-none px-2 py-2 rounded-md hover:bg-everforest-bg2 transition-colors duration-200 ease-smooth"
                            on:click=move |_| set_open.update(|v| *v = !*v)
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-everforest-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                            </svg>
                            <span class="sr-only">Open Menu</span>
                        </button>
                        <ul class=burger_class>
                            {all_routes().iter().map(|route| {
                                view! {
                                    <LinkedRoute route=*route set_open=set_open />
                                }
                            }).collect::<Vec<_>>()}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    }
}
