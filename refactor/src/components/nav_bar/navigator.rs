use leptos::*;
use super::linked_route::LinkedRoute;
use super::helpers::all_routes;
use crate::models::constants::TITLE;

#[component]
pub fn Navigator() -> impl IntoView {
    let (is_open, set_open) = create_signal(false);

    let nav_style = "fixed top-0 z-30 w-full -mb-10 px-2 py-4 bg-white sm:px-4 sm:py shadow-xl";
    let div_style = "flex items-center justify-between mx-auto max-w-7xl";
    let title_style = "md:text-2xl text-lg font-extrabold text-blue-600";

    let burger_class = move || {
        if is_open.get() {
            "absolute top-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow"
        } else {
            "hidden top-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow"
        }
    };

    view! {
        <div class="bg-gray-100">
            <header class=nav_style>
                <div class=div_style>
                    <span class=title_style>{TITLE}</span>
                    <div class="flex items-center space-x-1">
                        <ul class="hidden space-x-2 md:inline-flex">
                            {all_routes().iter().map(|route| {
                                view! {
                                    <LinkedRoute route=*route set_open=set_open />
                                }
                            }).collect::<Vec<_>>()}
                        </ul>
                        <div class="inline-flex md:hidden">
                            <button
                                class="flex-none px-2"
                                on:click=move |_| set_open.update(|v| *v = !*v)
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
    }
}
