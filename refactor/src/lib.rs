mod models;
mod components;
mod app;

use leptos::*;
use leptos_router::*;
use leptos_meta::*;
use wasm_bindgen::prelude::wasm_bindgen;
use components::nav_bar::navigator::Navigator;

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Title text="Ezra Rubio : Developer" />
        <Meta name="description" content="Ezra's portfolio" />
        <Link rel="icon" href="/favicon.ico" />
        <Router>
            <Navigator />
            <Routes>
                <Route path="/" view=app::home::Home />
                <Route path="projects" view=app::projects::Projects />
                <Route path="contact" view=app::contact::Contact />
            </Routes>
        </Router>
    }
}

#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    web_sys::console::log_1(&"=== main started ===".into());

    console_log::init_with_level(log::Level::Debug).expect("couldn't initialize logging");
    web_sys::console::log_1(&"logging initialized".into());

    web_sys::console::log_1(&"calling mount_to_body".into());
    mount_to_body(|| {
        web_sys::console::log_1(&"inside mount_to_body closure".into());
        view! {
            <App />
        }
    });
    web_sys::console::log_1(&"mount_to_body returned".into());
}
