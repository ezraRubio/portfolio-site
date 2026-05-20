use leptos::*;
use crate::models::constants::HELLO;
use crate::components::typical::Typical;
use crate::components::technologies::Technologies;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div class="relative overflow-hidden bg-everforest-bg0">
            <div class="parallax-bg absolute inset-0 bg-gradient-to-br from-everforest-bg0 via-everforest-bg1 to-everforest-bg2 opacity-80"></div>
            <div
                class="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
                style="z-index: 1;"
            >
                <div class="text-5xl md:text-7xl font-bold text-everforest-fg mb-6 animate-fade-in-up">{HELLO}</div>
                <div class="text-2xl md:text-4xl font-semibold text-everforest-grey2 text-center animate-fade-in-up" style="animation-delay: 0.2s;">
                    "I'm a "
                    <Typical steps=vec![
                        ("Front End", 2000),
                        ("Back End", 2000),
                        ("Full Stack", 6000),
                    ] />
                    " Software Developer"
                </div>
            </div>
            <div
                class="relative min-h-screen flex items-center justify-center bg-everforest-bg0/50"
                style="z-index: 1;"
            >
                <Technologies />
            </div>
        </div>
    }
}
