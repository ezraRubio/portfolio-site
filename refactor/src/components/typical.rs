use leptos::*;
use gloo_timers::future::TimeoutFuture;
use wasm_bindgen_futures::spawn_local;

#[component]
pub fn Typical(steps: Vec<(&'static str, u32)>) -> impl IntoView {
    let (text, set_text) = create_signal(String::new());

    spawn_local(async move {
        loop {
            for (step_text, duration) in &steps {
                set_text.set(String::new());
                for ch in step_text.chars() {
                    set_text.update(|s| s.push(ch));
                    TimeoutFuture::new(100).await;
                }
                TimeoutFuture::new(*duration).await;

                let len = step_text.chars().count();
                for _ in 0..len {
                    set_text.update(|s| { s.pop(); });
                    TimeoutFuture::new(50).await;
                }
                TimeoutFuture::new(300).await;
            }
        }
    });

    view! {
        <span class="typing-text">{move || text.get()}</span>
    }
}
