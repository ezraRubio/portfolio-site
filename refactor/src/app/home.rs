use leptos::*;
use crate::models::constants::HELLO;
use crate::components::typical::Typical;
use crate::components::technologies::Technologies;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div class="relative overflow-hidden">
            <div class="parallax-bg absolute inset-0 bg-gradient-to-b from-blue-500 to-green-500"></div>
            <div
                class="relative h-screen flex flex-col items-center justify-center"
                style="z-index: 1;"
            >
                <div class="text-6xl font-bold text-white mb-6">{HELLO}</div>
                <div class="text-4xl font-semibold text-white text-center">
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
                class="relative h-screen flex items-center justify-center"
                style="z-index: 1;"
            >
                <Technologies />
            </div>
        </div>
    }
}
