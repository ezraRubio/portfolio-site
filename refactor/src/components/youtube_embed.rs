use leptos::*;

#[component]
pub fn YouTubeEmbed(id: &'static str) -> impl IntoView {
    let src = format!("https://www.youtube.com/embed/{}", id);

    view! {
        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
            <iframe
                src=&src
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=true
                title="Embedded youtube"
                class="w-full h-full"
            ></iframe>
        </div>
    }
}
