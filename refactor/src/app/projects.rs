use leptos::*;
use crate::components::project::Project;
use crate::models::constants::PROJECTS;

#[component]
pub fn Projects() -> impl IntoView {
    view! {
        <div class="flex flex-row justify-center flex-wrap my-16 px-4 pt-24 bg-everforest-bg0 min-h-screen">
            <h1 class="text-4xl md:text-5xl font-bold text-everforest-fg text-center w-full mb-8">Projects</h1>
            {PROJECTS.iter().map(|project| {
                let p = project.clone();
                view! {
                    <Project project=p />
                }
            }).collect::<Vec<_>>()}
        </div>
    }
}
