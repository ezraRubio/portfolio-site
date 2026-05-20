use leptos::*;

#[component]
pub fn ProjectImageDisplay(images: Vec<&'static str>) -> impl IntoView {
    view! {
        <div class="flex flex-row space-x-3 overflow-x-auto pb-2">
            {images.iter().map(|image| {
                let img = *image;
                view! {
                    <img
                        src=img
                        alt="project image"
                        class="h-48 w-auto rounded-md object-cover shadow-sm hover:shadow-md transition-shadow duration-200 ease-smooth"
                    />
                }
            }).collect::<Vec<_>>()}
        </div>
    }
}
