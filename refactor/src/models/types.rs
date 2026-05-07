#[derive(Clone)]
pub struct Project {
    pub title: &'static str,
    pub repo: &'static str,
    pub description: &'static str,
    pub images: &'static [&'static str],
    pub download_or_open: Option<&'static str>,
    pub youtube_id: Option<&'static str>,
    pub is_hosted: bool,
}
