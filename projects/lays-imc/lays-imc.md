# Lay's New Year IMC - AI Face Generation Pipeline
*The content below was aggregated by gemini and was validated by Danh Le*
## Project Overview

An innovative AI-powered pipeline designed to generate personalized faces for Lay's New Year Integrated Marketing Campaign (IMC). This project leverages cutting-edge machine learning techniques to analyze and reconstruct facial features of successful individuals, creating engaging and personalized visual content for marketing purposes.

![Project Overview](/images/projects/lays-imc/Lay'sTetCaseDesign.jpg)

## Introduction
The Lunar New Year, locally known as Tet Nguyen Dan, represents the singular most critical commercial window in the Vietnamese marketing calendar. It is a period where consumer spending spikes disproportionately, social structures are reinforced through gifting rituals, and brand loyalty is famously fluid. For Fast-Moving Consumer Goods (FMCG) manufacturers, particularly in the food and beverage sector, Tet is not merely a holiday; it is the "Super Bowl" of Vietnamese advertising—a high-stakes arena where market share is won or lost for the entire year.

In the prelude to Tet 2024 (the Year of the Dragon), the marketing landscape was characterized by a unique set of socio-economic pressures. Following a year of global economic headwinds and domestic financial uncertainty in 2023, consumer sentiment was fragile. The traditional exuberance of Tet was tempered by a pragmatic "value-seeking" mindset, yet paradoxically coupled with a heightened psychological need for optimism, luck, and spiritual reassurance. Brands were tasked with walking a delicate tightrope: acknowledging the difficult economic reality without dampening the festive spirit, and driving consumption in a climate of tightening wallets.

Within this context, PepsiCo’s Lay’s—the global leader in potato chips—faced a structural category challenge. While savory snacks enjoy high household penetration, they are not indigenous to the core Tet rituals of ancestral worship or formal gifting, areas traditionally dominated by premium confectionery (biscuit tins), alcoholic beverages (beer cases), and soft drinks. To disrupt this hierarchy and secure a "seat at the table" during Tet 2024, Lay's Vietnam architected a campaign that transcended traditional product marketing.

The campaign, titled "Có Lay's Tết này - Cười vui lấy vía" (Smile for Blessings with Lay's This Tet), represents a watershed moment in data-driven creative strategy. By synthesizing cultural anthropology (the "Xin Vía" manifestation trend) with hard biometric science (academic research on smile morphology), Lay's executed a strategic repositioning of the humble potato chip from a casual snack to a talisman of good fortune. This report offers an exhaustive analysis of the campaign’s strategic architecture, scientific methodology, execution, and commercial impact, creating a comprehensive document of record for this award-winning initiative.

## Technical Implementation: AI-Driven Face Generation

Having established the campaign's strategic context, it becomes essential to examine the technological backbone that enabled this innovative approach. The core objective of this AI pipeline was to develop a sophisticated system capable of generating synthetic faces tailored to specific predetermined criteria and user requirements.

The technical challenge extended beyond mere facial image creation. The system needed to produce outputs with exceptional visual fidelity and photorealistic quality whilst maintaining considerable diversity. Moreover, it had to accommodate highly specific user parameters, including variations in skin tone, distinctive facial features, and particular emotional expressions.

This technological solution holds substantial promise across multiple domains. Within the entertainment sector, such systems enable the creation of unique virtual characters for films and video games without extensive motion capture sessions. For advertising applications, brands can generate campaign-appropriate models without engaging physical talent. In law enforcement and security contexts, the technology facilitates facial reconstruction based on witness testimonies. Furthermore, academic researchers benefit from streamlined experimental procedures and analytical workflows.

Beyond its immediate practical applications, this project represents a meaningful contribution to the broader advancement of artificial intelligence in computer vision and image synthesis. It creates opportunities for algorithmic refinement whilst fostering collaboration among researchers, developers, and end-users in identifying and implementing novel solutions to complex visual challenges.

### Scope of Research
The scope of this research revolves around collecting facial data from a specific set of individuals. These individuals were selected based on a number of special common characteristics as follows:
* People who have achieved success in their field.
* People with excellent learning ability.
* People who possess special luck in life.
* People who are happy in love.
* People who are healthy or have achievements in sports


These characteristics not only reflect psychological and spiritual aspects, but are also expressed as physiognomic features on the face.

Through data collection and analysis, the study aimed to understand and identify common facial features of these individuals. This not only helps us better understand how mental traits can influence facial expressions, but also provides a basis for training artificial intelligence models.

When the AI model is trained with a large amount of image data of faces in the above lists in a technically correct way, it is capable of detecting and reproducing the features on these special faces. The ultimate goal of the research is to use the AI model after training to create artificial faces that have similar characteristics such as "successful", "intelligent", "lucky", “happy”, or “healthy” is clearly reflected. This opens up a new and exciting field of research that combines psychology, computer vision and artificial intelligence, and contributes to the development and greater understanding of connectivity. between spirit and physics in humans.

### Low-Rank Adaptation (LoRA)

Building upon the research foundation outlined above, the technical implementation leveraged Low-Rank Adaptation (LoRA), an efficient training methodology specifically designed for large-scale models. LoRA provides a streamlined approach to model fine-tuning that significantly reduces computational overhead whilst maintaining high memory efficiency. The technique operates by introducing pairs of rank-decomposition weight matrices—termed 'update matrices'—into pre-existing model architectures. Crucially, the training procedure exclusively modifies these newly added parameters, leaving the original model weights largely intact.

The advantages of LoRA become particularly apparent when compared to conventional fine-tuning approaches. Traditional fine-tuning essentially seeks to identify parameter adjustments $\Delta \Theta$ that minimize a given loss function $L(X, y; \Theta_0 + \Delta \Theta)$, where $L$ represents the loss function, $X$ and $y$ comprise the training data, and $\Theta_0$ denotes the pre-trained model weights. The challenge lies in learning these parameters $\Delta \Theta$, which possess dimensionality equivalent to $\| \Delta \Theta_0 \|$, effectively matching the scale of $\| \Theta_0 \|$. When dealing with contemporary large-scale pre-trained models, identifying appropriate $\Delta \Theta$ values becomes computationally prohibitive. Furthermore, conventional fine-tuning necessitates learning entirely distinct parameter sets for each downstream task, significantly complicating deployment logistics.

LoRA addresses these limitations through an elegant approximation: $\Delta \Phi$, where $\| \Delta \Phi \| \ll \| \Delta \Theta \|$. This approach capitalizes on an empirical observation that neural networks contain numerous densely connected layers performing matrix operations. Whilst these layers function at full rank during initial pre-training, weight adjustments during task-specific adaptation typically occupy a substantially lower 'intrinsic dimension.' This insight enables considerable efficiency gains whilst maintaining model performance across diverse applications.

Technically speaking, LoRA implements a straightforward matrix decomposition for each weight update $\Delta \theta \in \Delta \Theta$. For any given weight update $\Delta \theta_i \in \mathbb{R}^{d \times k}$ corresponding to the $i$-th layer, the method approximates it through:

$$
    \Delta\theta_i \approx \Delta \phi_i = BA
$$

where $B \in \mathbb{R}^{d \times r}$ and $A \in \mathbb{R}^{r\times d}$, with the rank $r \ll \min(d,k)$. Consequently, rather than learning $d \times k$ parameters, we need only optimize $(d+k)\times r$ values—a substantially smaller parameter space given that $r$ remains significantly smaller than both $d$ and $k$. During implementation, the update $\Delta \theta_i$ undergoes scaling by $\frac{\alpha}{r}$ prior to integration with $\theta_i$, functioning analogously to a learning rate hyperparameter for the LoRA adaptation process.


### DreamBooth: Personalized Text-to-Image Generation

Complementing the LoRA methodology, our implementation incorporated DreamBooth, a sophisticated fine-tuning framework developed collaboratively by Google Research and Boston University researchers in 2022. DreamBooth specializes in personalizing pre-trained text-to-image models through efficient adaptation procedures.

The framework's primary strength lies in its ability to generate highly customized outputs using remarkably limited training data—typically requiring merely three to five reference images of the target subject. This data efficiency makes it particularly suitable for campaigns requiring rapid iteration and personalization.

Operationally, DreamBooth accepts a small collection of subject images (generally 3-5 examples) alongside an associated class label. Through its training procedure, it produces a personalized text-to-image model that encodes a unique identifier representing the specific subject. During inference, this identifier can be seamlessly integrated into diverse textual prompts, enabling the model to synthesize the subject across varied contextual scenarios and compositions.

The complete DreamBooth pipeline is illustrated in the figure below, demonstrating the two-stage refinement process:

![DreamBooth Pipeline](/images/projects/lays-imc/dreambooth.png)

The initial fine-tuning stage involves pairing the input images with carefully constructed textual prompts that incorporate both a unique subject identifier and the relevant class descriptor. For instance, a prompt might read 'A photo of a [T] dog,' where [T] serves as the unique token. Concurrently, a class-specific loss function preserves broader categorical knowledge, ensuring the model retains its ability to generate diverse instances within the subject's class (e.g., 'A photo of a dog' without the specific identifier). This dual approach balances subject-specific learning with generalization capabilities.

The subsequent refinement stage focuses on enhancing the super-resolution components. This involves training on paired low-resolution and high-resolution versions of the input imagery. Such refinement proves crucial for maintaining exceptional visual fidelity, particularly regarding intricate facial details and textural nuances—elements essential for generating convincing synthetic faces that embody the target attributes identified in our research phase.

## Campaign Case Study: "Cười Vui Lấy Vía" (Smile for Luck)

Having established the technological infrastructure enabling synthetic face generation, we now turn to examine how these AI capabilities were strategically deployed within the actual marketing campaign. This section analyzes the multi-faceted execution strategy that transformed technical innovation into commercial success.

### Strategic Execution: An Integrated Ecosystem Approach

The campaign's effectiveness stemmed from its holistic integration across multiple consumer touchpoints. Rather than pursuing isolated tactical initiatives, Lay's orchestrated a cohesive ecosystem encompassing physical packaging, auditory branding, and digital engagement platforms. Each element was carefully calibrated to reinforce the core "Smiling for Luck" proposition whilst creating multiple opportunities for consumer interaction.

#### Packaging Innovation: The Five Pillars of Fortune

The primary vehicle for the campaign was the limited-edition packaging. Lay's replaced its standard branding with the data-driven smiles. Crucially, the campaign segmented the abstract concept of "Luck" into five distinct "Vía" (Blessings), mapping them to specific product flavors and color codes. This segmentation strategy allowed the brand to target specific consumer anxieties.

**Table 1: Lay's Tet 2024 Packaging Segmentation Strategy**

| Product Flavor | Visual Color Code | Associated Blessing (Vía) | Target Audience & Need State |
|----------------|-------------------|---------------------------|------------------------------|
| Natural Classic | Yellow | Luck (May Mắn) | General Mass Market: Targeted the broad desire for general good fortune and wealth (Yellow = Gold). |
| Nori Seaweed | Green | Academic Excellence (Học Giỏi) | Gen Z / Students: Specifically targeting the anxiety of exams and academic pressure. |
| Texas Grilled Steak | Red / Orange | Success / Career (Thành Công) | Young Professionals / First Jobbers: Addressing career ambition and promotion hopes. |
| Cheese Shrimp | Blue | Love / "Escaping Singleness" (Thoát Ế) | Singles: Addressing the immense social pressure to marry or find a partner during Tet gatherings. |
| Brazil BBQ Ribs | Dark Green | Health (Khỏe Mạnh) | Health Conscious / Elderly: Addressing post-pandemic health anxieties. |

This segmentation transformed the purchase decision. A consumer wasn't just choosing "Seaweed flavor"; they were choosing "High Grades." This emotional hook is significantly stronger than taste preference alone.

#### Sonic Branding: The "Duc Phuc" Effect

To amplify the message, Lay's partnered with pop star Duc Phuc. This choice was highly strategic. Duc Phuc has cultivated a persona as the "Messenger of Tet," having released a string of viral hits in previous years (e.g., "Đi để trở về"). His voice triggers a Pavlovian association with the holiday season for Vietnamese listeners.
**The Music Video (MV)**: The song "Cười Vui Lấy Vía" (Smile for Luck) served as the campaign anthem.
**Performance**: The MV achieved over 20 million views on YouTube.11
Lyrical Themes: The lyrics reinforced the "Manifestation" theme, encouraging listeners to smile to attract good things. The repetition of the phrase "Cười lên đi" (Smile now) acted as a hypnotic call to action.
**Visual Language**: The video utilized the same vibrant color palette as the packaging, creating visual synergy. It depicted scenarios of bad luck being reversed by the act of smiling with a Lay's bag.
**Virality**: The song ranked #7 on Reputa’s chart of influential MVs and #4 on trending CapCut templates.1
#### Digital Activation: Technology Meets Tradition

Recognizing the predominantly mobile-first behavior of Generation Z consumers, Lay's developed a dedicated web application (layscuoivui.com.vn) that ingeniously bridged traditional spirituality with contemporary technology. This platform represented perhaps the campaign's most innovative element:

- **User Interaction:** Participants could scan either product packaging or their own facial expressions using smartphone cameras, creating a low-friction entry point
- **AI-Powered Analysis:** The system employed computer vision algorithms—conceptually similar to those underlying the SELab biometric research—to evaluate smile characteristics and subsequently "bestow" personalized blessings
- **Gamified Tradition:** This digital experience effectively modernized the centuries-old practice of "Xin Xăm" (fortune stick divination) traditionally performed at temples, rendering it instantaneous, accessible, and inherently shareable across social networks
- **Engagement Metrics:** The platform attracted over 72,000 unique participants, demonstrating remarkable conversion rates from physical product interaction to digital engagement. This validated the effectiveness of the "Scan for Luck" value proposition

#### User-Generated Content: The CapCut Amplification Strategy

Building upon the digital engagement foundation, the campaign implemented a particularly shrewd approach to content multiplication through CapCut integration. By creating readily accessible templates within CapCut—TikTok's preferred editing application—Lay's dramatically reduced barriers to consumer-generated content creation.

- **Simplified Participation:** Rather than requiring video production skills, users simply uploaded personal photographs into pre-designed templates that automatically synchronized with the "Cười Vui Lấy Vía" audio track
- **Amplification Results:** This approach generated approximately 82,000 pieces of user-created content. Essentially, 82,000 consumers voluntarily transformed themselves into brand ambassadors, broadcasting campaign messaging throughout their personal social networks

This organic amplification represented exceptional marketing efficiency, as each piece of user-generated content carried implicit social proof and reached demographically relevant audiences without additional media expenditure.
### Market Performance and Commercial Impact

Whilst creative execution and technological innovation merit examination, the campaign's ultimate validation came through measurable commercial outcomes. The following analysis demonstrates how strategic positioning translated into tangible market gains during the intensely competitive Tet 2024 period.

#### Sales Performance and Market Share Dynamics

The primary campaign objective centered on capturing increased market share within a seasonal context traditionally dominated by confectionery products. The results substantially exceeded baseline expectations:

- **Volume Achievement:** The campaign sold 23 million promotional packs. Given Vietnam's approximate population of 100 million, this translates to roughly one in four citizens directly interacting with campaign packaging—a remarkable penetration rate for a non-traditional Tet product
- **Market Share Growth:** Lay's secured a 1.8 percentage point gain compared to Tet 2023 performance. Within the mature and intensely competitive FMCG snack category, nearly 200 basis points of market shift during a concentrated promotional window represents both statistical significance and substantial revenue redistribution from established competitors
- **Consumption Context Expansion:** Perhaps most significantly, the campaign successfully legitimized potato chips within Tet consumption occasions. By framing the product as a "lucky ritual" rather than merely a snack, Lay's earned placement on Tet celebration tables—spaces conventionally reserved for premium biscuits and traditional gift items

#### Digital Conversation Dominance

Beyond direct sales metrics, the campaign achieved exceptional performance in capturing consumer attention within Vietnam's digital ecosystem—particularly noteworthy given competitors' substantially larger media budgets:

- **Engagement Volume:** The initiative generated 9.2 million interactions across social platforms, indicating strong active participation rather than passive viewing
- **Reach Metrics:** Campaign content achieved 571 million impressions. This figure suggests an average exposure frequency exceeding five instances per internet user in Vietnam, ensuring robust top-of-mind awareness throughout the critical Tet period
- **Conversation Leadership:** With 240,000 total mentions during January 2024, the campaign secured positioning within Buzzmetrics' Top 10 campaigns, competing effectively against established market leaders including "Sting Ravolution" and "Tiger Beer"—brands typically commanding significantly larger promotional investments

**Table 2: Lay's Campaign Performance vs. Key Metrics**

| Metric Category | Result | Context/Significance |
|-----------------|--------|---------------------|
| Sales Volume | 23,000,000 Packs | Equivalent to ~23% of total population reach via product. |
| Market Share | +1.8 Points (vs. 2023) | Significant disruption of category leaders during peak season. |
| Social Buzz | 240,000 Mentions | Top 10 Industry-wide performance (Buzzmetrics). |
| Video Views | 92,800,000 Views | Aggregated across YouTube, TikTok, FB. |
| UGC Creation | 82,000 Posts | Indicates high level of active consumer participation. |

#### Industry Recognition and Validation

The campaign's innovative methodology received formal acknowledgment from prestigious regional marketing institutions, providing external validation of its strategic sophistication:

**BSI Awards 2024 (Buzzmetrics Social Index):**
- GOLD recognition for Best Innovative Social Media Campaign. Judging commentary specifically highlighted the "application of AI based on profound consumer insight." Notably, Lay's surpassed submissions from well-resourced competitors including Samsung and Nestle Milo

**MMA Smarties Vietnam 2024:**
- Bronze award in Brand Experience
- Bronze award in Real Time Marketing

*It bears noting that whilst other agencies secured Gold honors in alternative categories, Lay's consistent presence across multiple award classifications validates the campaign's cross-functional excellence rather than narrow tactical success.*

### Competitive Landscape: Contextualizing Achievement

To properly assess Lay's accomplishment, we must situate it within the broader competitive environment. The Tet 2024 marketing landscape featured several dominant campaigns from category leaders, each commanding substantial resources and established consumer mindshare.

#### Tiger Beer: Strength-Based Messaging

Tiger Beer—perennially among the most prominent Tet advertisers—deployed the "Mừng Năm Can Trường, Khai Xuân Bản Lĩnh" campaign, which translates roughly to "Celebrate the Year of Resilience, Welcome Spring with Courage."

- **Strategic Positioning:** The campaign emphasized Year of the Dragon associations—masculinity, fortitude, and courage. Execution relied heavily on outdoor advertising infrastructure and a major "Golden Ball" promotional mechanic
- **Comparative Analysis:** Tiger Beer pursued a broadcast-centric, top-down approach emphasizing aspirational strength. By contrast, Lay's adopted a participatory, bottom-up strategy centered on vulnerability and hope. Whilst Tiger achieved superior scale and visibility (securing Gold at Smarties), Lay's excelled in fostering genuine emotional connection and behavioral engagement. Tiger appealed to consumer aspirations; Lay's addressed consumer anxieties

#### Pepsi: Emotional Storytelling

Pepsi maintained its established platform centered on family reunification themes with the "Mang Tết Về Nhà" (Bring Tet Home) campaign.

- **Strategic Approach:** Execution relied on emotionally charged storytelling coupled with tangible support mechanisms, including subsidized transportation for migrant workers returning home
- **Comparative Analysis:** Pepsi effectively owned the sentimental, tear-inducing emotional territory. Lay's, conversely, occupied the optimistic and playful psychological space. In a year marked by economic anxiety and pandemic fatigue, Lay's lighthearted, science-backed approach to happiness offered a refreshing counterpoint to campaigns demanding heavy emotional investment

#### Direct Category Competitors

Other savory snack manufacturers (including Oishi and Swing) largely defaulted to conventional seasonal packaging refreshes lacking distinctive narrative frameworks. Lay's "Smile" packaging provided functional value—luck manifestation—that transformed the product from passive commodity to active tool. This positioning effectively rendered competing offerings as functionally inferior despite potential taste parity.
### Theoretical Implications: Marketing at the Intersection of Science and Culture

Having examined the campaign's execution and market performance, we must now consider its broader theoretical significance for contemporary marketing practice. The "Cười Vui Lấy Vía" initiative offers valuable insights particularly regarding the evolving relationship between empirical data and cultural intuition.

#### Evidence-Based Creativity: A Paradigm Shift

The collaboration with SELab represents a noteworthy departure from traditional creative development processes. Rather than relying solely on artistic judgment, the campaign's visual elements emerged from algorithmic predictions based on biometric data. The selected smiles weren't chosen for aesthetic appeal but for their statistically demonstrated capacity to communicate specific psychological states such as "Success" or "Health."

**Building Consumer Trust Through Scientific Authority:** This approach proves particularly effective with Generation Z consumers, for whom empirical data serves as a credible language of validation. By positioning smiles as "Lab-Tested" rather than merely marketing-selected, Lay's circumvented the inherent skepticism typically directed toward commercial messaging. The persuasive appeal shifted from "our brand suggests smiling" to "scientific research demonstrates this specific smile correlates with success"—a substantially more compelling proposition in an age of widespread advertising fatigue.

#### Brands as Cultural Intermediaries

The campaign exemplifies an emerging phenomenon wherein commercial entities increasingly fulfill roles traditionally occupied by religious or spiritual institutions—providing rituals, symbolic objects, and reassurance.

- **Ritualization of Consumption:** Lay's successfully transformed chip consumption into a ceremonial act. The prescribed behaviors—"Scanning" packaging and "Smiling" for blessings—mirror traditional religious observances in structure and intent
- **Commercializing the Intangible:** The campaign effectively commodified "Vía" (spiritual fortune). By capturing, packaging, and retailing an inherently intangible spiritual concept for approximately 15,000 VND, Lay's demonstrated sophisticated command of what might be termed "Spiritual Materialism"—the notion that metaphysical wellbeing can be accessed through material consumption

#### Reimagining the Smile in Commercial Contexts

Traditionally within marketing frameworks, smiles served primarily as signals—indicating service quality (the welcoming flight attendant) or consumer satisfaction (the delighted product user). Lay's fundamentally repositioned the smile from passive indicator to active agent.

**Leveraging Psychological Mechanisms:** The campaign implicitly exploited the well-established "Facial Feedback Hypothesis," which posits that physical facial expressions can influence corresponding emotional states. By requiring consumers to smile to receive their "blessing" (via AR filters), Lay's essentially engineered moments of genuine positive affect. This created authentic favorable associations with the brand, grounded not merely in messaging but in actual psychophysiological experience.
## Conclusion

The Lay's Vietnam "Cười Vui Lấy Vía" campaign for Tet 2024 exemplifies strategic cultural resonance executed at the highest level. Confronting the inherent challenge of positioning a non-traditional Tet product during a period of economic uncertainty, Lay's developed an approach that seamlessly integrated data science, cultural anthropology, and entertainment value.

The campaign's success stemmed from identifying and validating the "Xin Vía" manifestation trend through rigorous biometric research conducted by VNU-HCM. This scientific foundation enabled Lay's to transform an everyday snack item into a symbolic vessel of hope and good fortune. The execution demonstrated remarkable coherence, utilizing targeted segmentation (five distinct blessings addressing five consumer needs), sonic branding power (Duc Phuc's cultural cachet), and viral mechanics (CapCut templates driving user participation).

Ultimately, the results speak decisively: 23 million units sold and a 1.8 percentage point market share gain during Vietnam's most competitive marketing window. These figures validate a crucial insight—in high-stakes seasonal marketing, victory accrues not necessarily to the largest budgets, but to the deepest understanding of consumer psychology. Lay's didn't merely sell potato chips; they offered a scientifically optimized pathway to a better year ahead. In 2024's particular socio-economic context, this value proposition proved irresistible.

### Strategic Insights for Marketing Professionals

This campaign yields several transferable principles for contemporary marketing practice:

- **Cultural Data Synthesis:** Future consumer insight will increasingly demand the integration of "soft" cultural trends (beliefs, superstitions) with "hard" empirical data (biometrics, behavioral analytics)
- **Platform-Native Activation:** Successful campaigns must provide creation tools (e.g., CapCut templates) rather than solely consumption content, enabling audiences to become active participants rather than passive recipients
- **Micro-Segmented Need States:** Even culturally monolithic occasions like Tet contain numerous micro-segments with distinct anxieties (students seeking academic success vs. singles seeking romantic partners). Addressing these specifically drives disproportionate conversion
- **Scientific Credibility:** In an era of declining institutional trust and advertising skepticism, partnerships with academic institutions can provide crucial third-party validation for brand claims

---

## References

1. Smile For Blessings With Lay's This Tet | The Best Innovative Social Media Campaign, accessed December 8, 2025, https://bsiawards.buzzmetrics.com/case-library/co-lays-tet-nay-cuoi-vui-lay-via-inno
Vietnam's Tet shopping journey: Demand extends beyond Tet and across digital touchpoints, accessed December 8, 2025, https://www.decisionlab.co/blog/tet-consumer-trends-reshaped-by-dual-wave-demand-path-to-purchase-and-ai-integration
Cách mình MANIFEST vũ trụ giúp KIẾM VIỆC hiệu quả giữa làn sóng lay off - Lemon8-app, accessed December 8, 2025, https://www.lemon8-app.com/minlatrhangday/7269705020369830402?region=vn
Năm “rồng”, “thanh long” lên ngôi: Lifebuoy, Lay's và loạt thương hiệu “xúng xính” thay áo mới mừng Tết 2024 | Advertising Vietnam, accessed December 8, 2025, https://advertisingvietnam.com/nam-rong-thanh-long-len-ngoi-lifebuoy-lays-va-loat-thuong-hieu-xung-xinh-thay-ao-moi-mung-tet-2024-p23677
Smile-related oral characteristics in vietnamese students - PMC - PubMed Central - NIH, accessed December 8, 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12659754/
Smile-related oral characteristics in vietnamese students - ResearchGate, accessed December 8, 2025, https://www.researchgate.net/publication/397087464_Smile-related_oral_characteristics_in_vietnamese_students
Smile: A review - PMC - PubMed Central, accessed December 8, 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC4439690/
Impact of artificial intelligence-based digital smile design on patient and clinician satisfaction and facial esthetic outcomes: A systematic review and meta-analysis, accessed December 8, 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12536214/
Instant Smile Analysis and Design Using Artificial Intelligence and Deep Learning Techniques - ResearchGate, accessed December 8, 2025, https://www.researchgate.net/publication/396081757_Instant_Smile_Analysis_and_Design_Using_Artificial_Intelligence_and_Deep_Learning_Techniques
Smile Analysis - BINASSS, accessed December 8, 2025, https://www.binasss.sa.cr/jul22/17.pdf
TẾT LÀ ĐÔNG MỚI VUI - ĐỨC PHÚC x GDUCKY x DTAP | OFFICIAL MUSIC VIDEO, accessed December 8, 2025, https://m.youtube.com/watch?v=b0MTyBoKz1I&pp=ygUMI3Z1aXZlZG9uaGFu
12. Miu Music - YouTube, accessed December 8, 2025, https://www.youtube.com/@miumusic
13. Smile For Blessings With Lay's This Tet | The Best Use of Content Creativity - BSI Awards, accessed December 8, 2025, https://bsiawards.buzzmetrics.com/case-library/co-lays-tet-nay-cuoi-vui-lay-via-cont
14. Winners | 2024 - BSI Awards - Buzzmetrics, accessed December 8, 2025, https://bsiawards.buzzmetrics.com/winners-gallery/winners-2024
15. Award Categories | 2024 - BSI Awards - Buzzmetrics, accessed December 8, 2025, https://bsiawards.buzzmetrics.com/award-categories/2024
16. Presenting The Smarties Vietnam 2024 Winners - MMA Global, accessed December 8, 2025, https://www.mmaglobal.com/smarties-2024/finalists/winners/region:10
17. Các chiến dịch OOH chào Tết 2024 cực hoành tráng của thương hiệu Việt, accessed December 8, 2025, https://quangcaongoaitroi.com/diem-mat-4-chien-dich-quang-cao-ooh-chao-tet-2024-cuc-hoanh-trang-cua-thuong-hieu-viet/
18. BSI Top10: Bảng xếp hạng social media tháng 11/2024 - Buzzmetrics, accessed December 8, 2025, https://www.buzzmetrics.com/en/bai-viet-bsi/bsi-top10-bang-xep-hang-social-media-thang-11-2024
