import "./thesis.css"

export default function MSThesis() {
    return (
        <div className="section-box">
            <div className="centered">
                <a href="https://digitalcommons.calpoly.edu/theses/3108/" target="_blank">
                    <button>Read it on the Cal Poly Digital Commons here!</button></a>
            </div>

            <h2>Abstract</h2>
            <p>
                While video game accessibility is a growing research topic, few studies investigate how players perceive the presence versus the absence of accessibility features, or how non-disabled players react to the option of accessibility features. This study explores these research gaps, investigating how access to accessibility features affects the experience of both disabled and non-disabled players. For the purposes of this study, a small platformer game was developed with as many accessibility features as feasible for the scope of the project. An A vs.\ B study was conducted in the game, with anonymous participants randomly assigned to version A, with all acceptability features enabled, or version B, which had most features disabled. Overall reception to the features was primarily positive in both groups. A small portion of non-disabled players made use of the accessibility features. Most disabled players assigned to Version A used the accessibility features. Non-disabled players were primarily indifferent to the accessibility features, but some found them helpful or liked them even if they did not need them. Though strong conclusions are difficult to draw without more data, overall accessibility features are significantly desired by disabled players, and found to be useful and received positively by some non-disabled players. Further research is needed, but results show potential that including accessibility features can positively influence audience reception.
            </p>


            <h1 id="sec:IntroBackground">Introduction and Background</h1>
            <p>Over the past few decades, video games have risen from a niche hobby
                to a highly varied and widespread pastime. Far from being a waste of
                time, video games serve many important roles. Video games can be used as
                a tool to teach new skills: typing games are commonly used to teach
                people how to use keyboards, and apps such as Duolingo and Quizlet use
                gamified elements to keep people engaged while they study <span className="citation"
                    data-cites="duolingo quizlet"></span>. Video games can
                be used for pain management by serving as a distraction <span className="citation" data-cites="gaming4pain"></span>.
                One study shows that
                video games are associated with better fine motor control <span className="citation"
                    data-cites="gamesmotorskills"></span>. During the
                COVID-19 lockdown, many people turned to video games for stress relief,
                escapism, and a vehicle for remote socialization <span className="citation" data-cites="gamescovid"></span>. Video
                games hold inherent value as
                entertainment and a way for people to socialize over mutual interests.
                Additionally, the worldwide gaming market was valued at 396 billion US
                dollars in 2023, showing both the strong popularity and the monetary
                value of video games <span className="citation" data-cites="globalgamemarket"></span>.</p>
            <p>As video games hold value in many ways, making them playable by as
                many people as possible is a goal worth working for. Though guidelines
                for designing games with accessibility for those with motor, sensory,
                and cognitive disabilities exist<span className="citation" data-cites="accguidelines"></span>, many games are sorely
                lacking in
                accessibility features. Some members of the gaming community have
                expressed concern that accessibility features such as adjustable
                difficulty will detract from the feelings of accomplishment from
                achievements like defeating a boss. This has been a popular discussion
                around the Dark Souls series in particular, games with a reputation for
                their difficulty <span className="citation" data-cites="darksoulseasy"></span>. It may be the case that game
                developers believe that accessibility features would make their game
                less serious, that their game is inherently inaccessible and thus not
                worth altering, or that they are not worth implementing due to the idea
                that they would only impact a small portion of their potential
                audience.</p>
            <p>In the past few decades, many advancements have been made that
                further the accessibility of games. Some early games, such as Zork from
                1980, are inherently good for accessibility. In the case of Zork, the
                text-only format made it ideal for adaptation to audio format for the
                blind. Many games have specifically been created to adapt to people with
                various disabilities. For instance, one-switch games, where the game can
                be played with a single button, are well-suited for those with mobility
                issues <span className="citation" data-cites="gameaccsurvey"></span>.
                <em>Accessibility in video games: a systematic review</em> examines
                various papers on accessibility in video games, and finds that some
                strategies to make games accessible ultimately segregate players with
                disabilities, and often rely on specific technology, limiting how many
                people are able to utilize the accessibility feature <span className="citation"
                    data-cites="accsystemreview"></span>.
            </p>
            <p>The goal of this thesis is to investigate how the presence or absence
                of accessibility features impacts the experience of players, both with
                and without disabilities. For this goal, a simple platformer game titled
                <em>Goblin Escape</em> was developed with a large variety of
                accessibility features. When the game starts, it randomly sets itself to
                Version A, where all accessibility features are enabled, or Version B,
                where most features are disabled. The study was distributed online,
                where participants were asked to fill out an anonymous survey to gather
                demographic information, play the game, and answer questions about their
                gameplay experience, depending on which version they were randomly
                assigned.
            </p>
            <h2 id="sec:BackgroundMotivation">Motivation</h2>
            <p>Video games hold a unique appeal for people all over the world,
                including the author. Without them, the author would not have met many
                of her closest friends, nor would she have studied Computer Science.
                When the world went under quarantine due to COVID-19, video games kept
                her connected.</p>
            <p>For many disabled people, most video games are partially or
                completely inaccessible. This barrier is often not due to the inherent
                nature of the game, but simply due to a lack of features which would
                cross that barrier. According to the Americans with Disabilities Act
                (ADA), a disability is legally defined as “a physical or mental
                impairment that substantially limits one or more major life activity”
                <span className="citation" data-cites="disabilitydefinition"></span>. While
                this definition offers a legal framework, this study relied on
                participants’ self-identification of disability status, recognizing that
                not all individuals who identify as disabled may be legally classified
                as such. Someone who is deaf can enjoy narrated cutscenes so long as
                they have captions. Someone with impaired vision may be able to play a
                combat game so long as the text is enlarged and the contrast is
                increased. Someone blind may be able to play a game as long as they can
                turn off the music and enable environmental cues to let them navigate.
                Someone with motor difficulties may be able to play any game so long as
                they can remap the controls to different buttons or a different
                controller entirely. As seen in Figure <a href="#fig:cdc-stats" data-reference-type="ref"
                    data-reference="fig:cdc-stats">1.1</a>,
                disabilities are quite common, with 13.9% of Americans having a
                cognitive disability, for example, so inaccessibility excludes quite a
                lot of potential players <span className="citation" data-cites="cdcinfographic"></span>.
            </p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/CDC_Disability.png`} id="fig:cdc-stats"
                    alt="Statistics from the CDC’s Disability Impacts Us All infographic" />
                <figcaption aria-hidden="true">Statistics from the CDC’s Disability
                    Impacts Us All infographic</figcaption>
            </figure>
            <p>Accessibility in games is important, but it can present significant
                development challenges. The hope with this project is to show that not
                only is including accessibility in games an important step toward
                greater inclusivity in gaming, but it can make your game better–
                potentially increasing its popularity.</p>
            <h2 id="sec:ProblemStatement">Problem Statement and Research
                Questions</h2>
            <p>The amount of high-profile games with non-industry-standard
                accessibility features seems to be increasing, with games such as The
                Last of Us 2 <span className="citation" data-cites="tlou2access"></span>
                featuring an impressive amount and variety of accessibility features.
                However, a common view on accessibility features still seems to be that
                they are an unnecessary addition that will benefit a niche playerbase,
                but will ultimately do nothing for the core audience of most games.</p>
            <p>One of the largest AAA game companies, Nintendo, only recently began
                to strive for accessibility with their latest console, the Nintendo
                Switch 2 <span className="citation" data-cites="switchacc accswitch2"></span>. Nintendo has historically
                done little beyond the industry standard for accessibility. One of
                Nintendo’s latest bestselling games, Breath of the Wild, lacked many
                common accessibility features, such as fully re-mappable controls, easy
                difficulty, and separate volume controls for different types of
                sounds.</p>
            <p>To encourage the game industry to adopt accessibility features on a
                wider scale, there should be encouragement beyond simple goodwill.</p>
            <p>This paper seeks to answer the following questions:</p>
            <ol>
                <li>
                    <p>Does the inclusion of accessibility features make a game more
                        appealing overall to all players?</p>
                </li>
                <li>
                    <p>What accessibility features are most appealing to different kinds
                        of players?</p>
                </li>
                <li>
                    <p>How will disabled versus non-disabled players react to the
                        inclusion of accessibility features?</p>
                </li>
            </ol>
            <p>I hypothesize that including accessibility features will make the
                game more appealing to all players. I anticipate that the most popular
                features will be volume control, control remapping (also commonly
                referred to as control rebinding), difficulty settings, and text
                narration. All of these are common inclusions even in games that would
                not necessarily classify them as accessibility features, so I anticipate
                that they will be familiar to most players. I expect that edge guard, a
                feature that prevents players from falling into pits, may also be
                popular. Avoiding pits on top of attacking enemies could be frustrating
                for players with motor disabilities, or even those without much prior
                experience playing video games. Additionally, high contrast mode may
                also be appreciated by many players, as impaired vision is a common
                disability. The specifics of each of these features are further
                discussed in Section <a href="#features" data-reference-type="ref" data-reference="features">[features]</a>.</p>
            <h2 id="sec:ScopeLimitations">Scope and Limitations</h2>
            <p>The primary focus of this study is to investigate how accessibility
                features impact the reception of a video game among a general American
                audience. The game used in this study is a small 2D platformer game with
                some projectile-firing mechanics to introduce complexity.</p>
            <p>One limitation of the study is that the game had to be developed
                largely from scratch. A preexisting game was used as a starting point,
                but the vast majority of mechanics had to be overhauled. There were no
                games found that already existed featuring a large variety of toggleable
                accessibility features as needed for the study when researched. As a
                result, the scale of the game was rather small, and quality control
                could not be as thorough as desired. Ideally, the game could have been
                tested on a large variety of different screens, devices, and browsers,
                but this was beyond the scope of the project.</p>
            <p>The game did not include any accessibility features specifically
                designed for deaf players, as the game was intended to be fully playable
                without audio, but did include features designed to help players with
                visual, cognitive, and motor disabilities. However, as further discussed
                in Section <a href="#ResultsReflections" data-reference-type="ref"
                    data-reference="ResultsReflections">[ResultsReflections]</a>, features
                such as captions for sound effects would have been beneficial
                additions.</p>

            <h1 id="related-work">Related Work</h1>
            <p>This chapter reviews literature relevant to video game accessibility
                and experiments relating to game features. While prior studies have
                addressed the value of individual accessibility features, there remains
                a lack of broader experimental studies addressing the impact of
                comprehensive accessibility features on a general player audience. This
                study aims to address those gaps.</p>
            <h2 id="video-game-accessibility-definitions-and-principles">Video Game
                Accessibility: Definitions and Principles</h2>
            <p><em>Human factors in game design: The importance of
                accessibility</em> defines accessibility in game design as “making video
                games accessible to people with all kinds of disabilities.” <span className="citation"
                    data-cites="humanfactors"></span>. Author Junjie Zheng
                also notes that “Accessible game design is also beneficial for
                non-disabled players. It can enhance the gaming experience for players
                with different preferences of settings. Not only that, but accessibility
                design is also beneficial for game developers, as it can increase the
                potential market size, user satisfaction, and social rating of a game.’
                <span className="citation" data-cites="humanfactors"></span>.
            </p>
            <p>Accessibility features, or generally accessible design choices, can
                be found in the majority of games. Features such as dialogue captions,
                resizable UI, or tutorials may not immediately stand out to many players
                as accessibility features, but these can all benefit players with
                disabilities or other limitations. Captions are essential for deaf
                players, but can also be helpful for players in loud locations.
                Resizable UI is helpful for players with impaired vision, but also helps
                when playing on a variety of screen sizes. Tutorials are often essential
                for understanding game mechanics, but can be particularly helpful for
                those with cognitive disabilities.</p>
            <p>There are no standardized industry guidelines for evaluating game
                accessibility, but there are some well-known guidelines. Microsoft has
                the <em>Xbox Accessibility Guidelines</em>, a set of best practices for
                making games accessible to players with disabilities <span className="citation" data-cites="xboxaccess"></span>.
                Though the guidelines
                are not requirements, Microsoft can be seen to stand by them with
                <em>Minecraft</em>, which has many different accessibility features
                <span className="citation" data-cites="minecraftacc"></span>. The guidelines
                are organized by type of feature, such as text display, difficulty
                options, or audio description, with each section providing detailed
                implementation guidelines, examples, and questions for evaluating the
                game.
            </p>
            <p><em>It’s Easier to Play Alone</em> compares game accessibility to the
                philosophy of Universal Design, the idea that products should be usable
                by everyone without any usability barriers <span className="citation" data-cites="playalonesurvey"></span>. In line
                with universal design,
                building a game with accessibility features in mind may help lower
                barriers for everyone.</p>
            <h2 id="industry-approaches-to-accessibility">Industry Approaches to
                Accessibility</h2>
            <p>Common features which may be classified as accessibility features
                according to the <em>Game Accessibility Guidelines</em> <span className="citation"
                    data-cites="accguidelines"></span> include captions,
                volume controls for different types of sound effects, tutorials, control
                remapping, and difficulty controls.</p>
            <p>Some common accessibility features may be omitted for the sake of
                challenge, such as a lack of difficulty settings or ability to pause, as
                in Dark Souls games <span className="citation" data-cites="darksoulseasy"></span>, or lack of closed captions for
                sounds in a horror game.</p>
            <p>The game industry hasn’t always been great about accessibility, but
                game companies have been increasingly considering it over the last
                decade. Xbox released their Adaptive Controller for physical
                disabilities in 2018 <span className="citation" data-cites="xboxadaptive"></span>. Craig Kaufman of AbleGamers, an
                organization dedicated to making video games more accessible, said of
                the device: “For a very long time, we were advocating that everyone
                should be able to play video games, and seeing Xbox make a device like
                this is showing that, from the top level, Xbox [is] going ‘Yeah,
                everyone should be a part of the awesome thing that is video
                games’”<span className="citation" data-cites="xboxadaptive"></span>.</p>
            <p>The Sony PlayStation 4 and 5 come with a variety of accessibility
                features at the console level, such as button remapping, the ability to
                zoom in on the screen, high contrast, display and text settings, and
                text-to-speech <span className="citation" data-cites="ps4acc ps5acc"></span>. The PlayStation 5 also adds
                voice-to-text for voice chat, as well as some voice-activated commands
                to open games and perform other tasks. The PlayStation store also
                includes accessibility tags to identify the accessibility features of
                individual games. And, following in the footsteps of Xbox, the
                PlayStation 5 has a modular accessible controller for use by players
                with limited mobility <span className="citation" data-cites="ps5acc"></span>.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/PlaystationStoreAccessibility.png`} id="fig:playstation-store-accessibility"
                    alt="Accessibility Tags for Ghost of Tsushima on the Playstation Store" />
                <figcaption aria-hidden="true">Accessibility Tags for Ghost of Tsushima
                    on the Playstation Store</figcaption>
            </figure>
            <p>The Last of Us Part II by developer Naughty Dog and published by Sony
                Interactive Entertainment in 2020 <span className="citation" data-cites="tlou2"></span>, currently stands as one of
                the most
                impressive examples of game accessibility today. The game features a
                wide variety of accessibility options targeted at vision, hearing, and
                motor disabilities, with the website that describes the accessibility
                features of the game listing 28 different ways the game can be adjusted
                according to the needs of the player <span className="citation" data-cites="tlou2access"></span>.</p>
            <p>Nintendo has not historically placed significant emphasis on
                accessibility for those with disabilities in its games or consoles, but
                due to the company’s focus on being family-friendly, its games and
                consoles have been fairly accessible on multiple occasions. A study
                carried out by the research company YouGov in November 2019 showed that
                parents of children aged 5-7 were more likely to purchase a Nintendo
                Switch over a PS4, Xbox One or PC <span className="citation" data-cites="parentsnintendo"></span>, and
                advertisements for the
                Nintendo Wii emphasized that it would be approachable for the entire
                family <span className="citation" data-cites="wiimarketing"></span>.</p>
            <h2 id="previous-studies-highlighting-the-impact-of-accessibility-features-on-player-reception">Previous
                studies highlighting the impact of accessibility features on player
                reception</h2>
            <p>There is plenty of research into what video games people with
                disabilities play, what different kinds of accessibility features exist,
                and similar topics. Most research evaluates games that already exist,
                but there is very little experimental research.</p>
            <p>The study <em>Investigating the Effects of Accessibility</em> looks
                at how the presence of closed captions affects the immersion of
                non-disabled players <span className="citation" data-cites="captionsstudy"></span>. The study ran two experiments on
                how
                closed captions affected immersion, with no participants reporting
                having any kind of hearing impairment. The first experiment had the 14
                participants play the game <em>Portal</em> with closed captions and
                without closed captions, though subtitles were turned on both times.
                Subtitles are captions for only dialogue, whereas closed captions are
                captions that include descriptions for sound effects as well. Both
                groups played both variants of the game, but the order was switched. The
                measured difference in experiences was small, but overall, a slightly
                lower degree of immersion was reported with the closed captions turned
                on. The second experiment investigated the effects of “enhanced speech
                bubbles”, speech bubbles for character dialogue with different designs
                according to the tone of speech, on player immersion. It was found that
                the enhanced speech bubbles, when compared to ordinary speech bubbles,
                resulted in higher player immersion, even when the game was played
                without audio as opposed to with voice acting.</p>
            <p>The study <em>The roles of task difficulty and prior videogame
                experience on performance and motivation in instructional
                videogames</em> investigated how different approaches to game difficulty
                impacted player motivation and performance <span className="citation" data-cites="gamedifficulty"></span>.
                Participants were categorized into
                inexperienced gamers who do not typically play video games, and
                experienced gamers who typically play video games for at least one hour
                a week. Participants disabilities were not measured. Participants played
                a video game in which the difficulty was changed in 4 different ways:
                static, increasing, adaptive-low, and adaptive-high. Overall, the
                different approaches to altering game difficulty over time made little
                difference except in the case of inexperienced players playing with
                increasing difficulty, where the game became more difficult over time
                regardless of player performance. These players showed the worst overall
                performance at the end of the trials, perhaps due to the game difficulty
                outpacing their skill level too quickly, or due to frustration.</p>
            <p>The study <em>The impact of tutorials on games of varying
                complexity</em> investigated how the presence and type of tutorials
                impacted how long players played games and how likely they were to
                return <span className="citation" data-cites="tutorialsimpact"></span>. It
                was not only measured how the presence versus the absence of tutorials
                affected the players, but also the type of tutorial. Tutorials were
                either context-sensitive, in which information was presented in-game as
                closely to the moment it would be needed as possible, and
                context-insensitive, in which information on the game was provided via a
                manual with screenshots and text descriptions. It was found that the
                presence of tutorials was not effective in increasing player engagement
                except when the game was very complex. With the most complex game, it
                was found that the context-sensitive tutorials performed better than the
                context-insensitive tutorials. No information was collected about player
                demographics.</p>
            <p>The study <em>The Impact of Color Blindness on Player Engagement and
                Emotional Experience: A Multimodal Study in a Game-Based
                Environment</em> had a group of colorblind players and non-colorblind
                players playing a game with multiple levels with different color schemes
                <span className="citation" data-cites="colorblindexperience"></span>. Using
                AI facial expression analysis, surveys, and screen recordings, player
                reactions to the game were measured. It was found that while the types
                of emotions recognized in each group varied, the colorblind players
                rated their emotional experience lower than that of the non-colorblind
                players. Additionally, attention and engagement were also noted to be
                lower in the group of colorblind players than in the group of
                non-colorblind players. The study concludes that the results may
                indicate that limited color perception may diminish player engagement.
                However, another possible interpretation of these results is that the
                experience of colorblind players is diminished when their colorblindness
                is not properly accommodated.
            </p>
            <p>The study <em>Level-Up! Comparing accessibility features based on
                gameplay performance</em> investigated the impact of visual and haptic
                accessibility features for audio game elements on both hearing and
                non-hearing players, and if these features gave hearing players an
                unfair advantage <span className="citation" data-cites="acccoomparison"></span>. Participants played a third-person
                shooter game with directional audio cues for incoming enemies. Half the
                hearing players and all hard-of-hearing players played without audio,
                and the type of accessibility cues present changed each level the
                participants played, with 20 levels in total. The results were collected
                through a post-gameplay survey, and scores were recorded during
                gameplay. It was found that the players without audio performed worse
                than those with audio, but both visual and haptic cues improved score in
                these players. However, players with audio performed best without the
                additional cues. The performance of no-audio players with the assistance
                of haptic cues was comparable to that of the players who had audio but
                did not use additional cues.</p>
            <h2 id="tools-and-methods-for-evaluating-accessibility">Tools and
                Methods for Evaluating Accessibility</h2>
            <p>The paper <em>Game accessibility evaluation methods: A literature
                survey</em> thoroughly evaluates numerous works that evaluate game
                accessibility. Overall, the survey found the following methods by which
                accessibility can be evaluated: “user-based methods: test with users,
                questionnaire application and focus group” and “inspection-based
                methods: guidelines review and heuristic evaluation” <span className="citation"
                    data-cites="accevaluationsurvey"></span>. It was found
                that various guidelines for evaluating game accessibility exist, through
                which games can be evaluated by going through the list of guidelines and
                suggested features and seeing which of them a game fulfills. This paper
                utilized the <em>Game Accessibility Guidelines</em>, as elaborated upon
                further in Section <a href="#features" data-reference-type="ref" data-reference="features">[features]</a>.</p>
            <p>There are various methods by which accessibility can be evaluated.
                One method, such as was done in the <em>Level-Up!</em> study, is to
                compare the scores of disabled players with and without accessibility
                features <span className="citation" data-cites="acccoomparison"></span>.
                However, this method has limitations, as score is often not a perfect
                way to evaluate performance nor if the player is getting the full
                gameplay experience, and many games lack a score system altogether. For
                games in which the existing scoring system may be inadequate, other
                measures for player performance and enjoyment could be utilized. This
                evaluation method would be potentially difficult to scale for a game
                with many accessibility features for many different types of
                disabilities.</p>
            <p>A variation of this method is to have disabled players test the game,
                and get feedback from the players afterwards, by survey, interview, or
                other method. Playtest feedback for <em>Goblin Escape</em> was acquired
                informally, both through in-person playtests by friends and through
                anonymous feedback on the <a
                    href="https://www.reddit.com/r/playtesters/comments/1izega3/looking_for_beta_testers_for_game_for_my_thesis/">Playtesters
                    subreddit</a> <span className="citation" data-cites="playtesters"></span>.
                Surveys can be used to collect both quantitative information such as
                Likert scale ratings and numerical reports, and qualitative information
                such as short answers. A key flaw with surveys is that they are subject
                to bias and mistakes of the responders. For information not dependent on
                the opinions of a playtester, it may be better to have someone record
                data. However, this can severely limit the number of respondents, as it
                limits subjects to only those that the administrator can directly
                interact with.</p>
            <h2 id="gaps-in-the-literature">Gaps in the Literature</h2>
            <p>Though a number of studies exist with similar approaches and goals to
                this paper, all have key differences or limitations. This section goes
                over the literature already discussed, highlighting areas not yet
                explored that this study covers.</p>
            <ul>
                <li>
                    <p><em>Investigating the Effects of Accessibility</em> focused on
                        one specific type of accessibility feature, did not include disabled
                        participants, and did not investigate aspects of player response such as
                        difficulty or playtime <span className="citation" data-cites="captionsstudy"></span>.</p>
                </li>
                <li>
                    <p><em>The roles of task difficulty and prior videogame experience
                        on performance and motivation in instructional videogames</em> and
                        <em>The impact of tutorials on games of varying complexity</em> both
                        investigated the impact of different variations of a specific feature
                        (difficulty scaling and tutorials, respectively), but disability and
                        accessibility were not core topics <span className="citation"
                            data-cites="gamedifficulty tutorialsimpact"></span>.
                    </p>
                </li>
                <li>
                    <p><em>The Impact of Color Blindness on Player Engagement and
                        Emotional Experience: A Multimodal Study in a Game-Based
                        Environment</em> did not test any accessibility features <span className="citation"
                            data-cites="colorblindexperience"></span>.</p>
                </li>
                <li>
                    <p><em>Level-Up! Comparing accessibility features based on gameplay
                        performance</em> has a very similar angle to the study, but only focuses
                        on one category of accessibility feature <span className="citation" data-cites="acccoomparison"></span>.
                        Individual features were enabled or
                        disabled for players across different levels, rather than the choice
                        being optional for players. Players in the <em>Level-Up!</em> study also
                        participated in sessions of about an hour, whereas for this paper
                        participants were encouraged to play for at least 5 minutes, but
                        permitted to stop playing at any point.</p>
                </li>
            </ul>
            <p>Overall, there are a number of studies with similar procedures or
                goals to this one. Most preexisting work focuses on analyzing and
                categorizing the accessibility features of games that already exist. Few
                of the papers on or tangential to game accessibility take an
                experimental approach, looking at how the presence of various features
                affects the performance and experience of players. None of the
                experimental studies cover as many different accessibility features, nor
                do any focus on how the availability versus inability of accessibility
                features affects the gameplay experience, as opposed to how the
                mandatory inclusion versus the lack of these features affects the
                experience.</p>

            <h1 id="methodology">Methodology</h1>
            <h2 id="game-design-and-accessibility-features">Game Design and
                Accessibility Features<span id="features"></span></h2>
            <p>The game developed for this study used a preexisting game as a
                foundation. This game was titled <em>Goblin Chase</em>, and was
                developed by the author and Diana Koralski as a class project. The title
                artwork, design of the main character, physics system, and art style
                were all kept. For this thesis, the game was renamed <em>Goblin
                    Escape</em>. <em>Goblin Escape</em> is a platformer game similar to
                <em>Super Mario Bros.</em> <span className="citation" data-cites="supermariobros"></span>. The gameplay is simple:
                players
                have to progress through levels where they start at the left side of the
                world, and must confront enemies and jump over pits in order to reach
                the goal at the end and progress to the next level or end of the game.
                Different enemies (guards) in the game have different sizes, movement
                patterns, and projectile throwing behaviors. The player character (the
                goblin) can defeat the guards by throwing different projectiles at them.
                The game was <a href="https://goblinchasethesis.itch.io/goblin-escape-game-accessibility-thesis">hosted
                    on the website Itch.io</a> <span className="citation" data-cites="goblinescape"></span>.
            </p>
            <p>The game has three different projectiles, which are as follows:</p>
            <ul>
                <li>
                    <p>Potion: Stuns enemies, causing them to briefly become intangible,
                        allowing the goblin to walk through them. Stunned enemies appear
                        translucent.</p>
                </li>
                <li>
                    <p>Snowball: Freezes enemies, causing them to briefly stop moving
                        and stop throwing projectiles, making it easier to jump over them. Also
                        causes a snowflake icon to appear over the frozen guard’s head.</p>
                </li>
                <li>
                    <p>Banana Peel: Causes guards to slip and fall offscreen,
                        permanently defeating them.</p>
                </li>
            </ul>
            <p>When the game starts, it randomly sets the version to A or B. In
                Version A, all accessibility features are enabled, while in Version B,
                most are disabled and hidden.</p>
            <p>Before the game was released for the study, play testing was
                conducted in the <a
                    href="https://www.reddit.com/r/playtesters/comments/1izega3/looking_for_beta_testers_for_game_for_my_thesis/">Playtesters
                    subreddit</a> on Reddit and with friends and family, to try to identify
                overlooked bugs and improve the game design <span className="citation" data-cites="playtesters"></span>. Blind
                Accessibility Advocate Lucia
                Greco was consulted for advice on how to playtest the game and for
                suggestions on features to add. The directional footsteps feature and
                audio navigation feature were added due to her advice and
                suggestions.</p>
            <h3 id="features-present-in-both-versions">Features Present in Both
                Versions</h3>
            <p>The game has 8 accessibility features available in both Version A and
                Version B:</p>
            <h5 id="control-remapping">Control Remapping</h5>
            <p>The control remapping menu is shown in Figure <a href="#fig:controls-menu" data-reference-type="ref"
                data-reference="fig:controls-menu">1.1</a>. Players can remap any button
                used to control the game and menus as they like, allowing for different
                keyboard configurations to be used according to each player’s comfort.
                This is intended to help players with motor disabilities, but should
                also be convenient for players who simply have preferences for different
                controls.</p>
            <p>A bug caused this feature to only be functional when used from the
                main menu, but not from the in-game pause menu.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/ControlsMenu.png`} id="fig:controls-menu" alt="The control remapping menu" />
                <figcaption aria-hidden="true">The control remapping menu</figcaption>
            </figure>
            <h5 id="volume-controls">Volume Controls</h5>
            <p>Separate volume controls for music, sound effects, audio-based
                navigation, and narration are available, as shown in Figure <a href="#fig:audio-menu" data-reference-type="ref"
                    data-reference="fig:audio-menu">1.2</a>, though the latter two are only
                visible in Version A. This is intended to be helpful for players with
                cognitive disabilities, who may find too many sound effects
                overwhelming, or certain sound effects to be too loud, and players with
                vision disabilities, who may rely on audio to help with navigation. This
                feature is also meant to be convenient for non-disabled players, who may
                have preferences about how loud sound effects and music should be.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/VolumeMenu.png`} id="fig:audio-menu" alt="The audio menu" />
                <figcaption aria-hidden="true">The audio menu</figcaption>
            </figure>
            <h5 id="footsteps">Footsteps</h5>
            <p>Both the goblin and guards make footstep sounds as they walk. The
                sounds made by the guards are directional, allowing the player to hear
                if an enemy is to the left or right if they are wearing headphones. The
                footsteps made by the goblin are distinct from those of the guards,
                allowing the player to notice if the goblin has walked into a wall or
                step if the footstep sounds stop. This feature is intended to help
                players with vision disabilities, while also making the game more
                immersive for all players.</p>
            <h5 id="large-ui">Large UI</h5>
            <p>The buttons, text, and in-game overlay were designed to be as large
                and readable as possible while still leaving plenty of room to see the
                gameplay. This is intended to help players with vision disabilities.</p>
            <h5 id="auto-throw">Auto Throw</h5>
            <p>Auto Throw can be toggled on and off with the associated button,
                causing the goblin to throw projectiles at the highest rate the game
                allows. This is convenient for non-disabled players, but is also
                intended to help players with cognitive and motor disabilities.</p>
            <h5 id="menu-button-navigation">Menu Button Navigation</h5>
            <p>All menus in the game are designed to be navigable both with a mouse
                and with buttons. This is intended to help players with vision and motor
                disabilities, while also being convenient to all players.</p>
            <h5 id="color-design">Color Design</h5>
            <p>The color scheme of the game was designed so that the goblin and
                guards would contrast well against the background, and to ideally be
                visually appealing. The background image in levels primarily consists of
                light yellows and oranges, while foreground objects mainly consist of
                darker blues, reds, and purples. All text is designed to either be white
                on a dark background or black on a light background, in order to be
                high-contrast and easy to read. These design choices are intended to
                help players with cognitive and visual disabilities, while also being
                appealing to all players.</p>
            <h5 id="tutorial">Tutorial</h5>
            <p>The first level for all players was a tutorial level. This level
                introduced the core mechanics, such as the controls and the behavior of
                each of the three projectiles. The start of the tutorial level is
                pictured in Figure <a href="#fig:high-contrast" data-reference-type="ref"
                    data-reference="fig:high-contrast">1.4</a>.</p>
            <h3 id="experimental-accessibility-features">Experimental Accessibility
                Features</h3>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AccessibilityMenu.png`} id="fig:accessibility-menu" alt="The accessibility menu" />
                <figcaption aria-hidden="true">The accessibility menu</figcaption>
            </figure>
            <p>The game has 11 different accessibility options available in a
                dedicated Accessibility menu, pictured in Figure <a href="#fig:accessibility-menu" data-reference-type="ref"
                    data-reference="fig:accessibility-menu">1.3</a>. This menu and the
                associated features are hidden in Version B. As each feature is selected
                or hovered over, a description of what it does is displayed on the
                right-hand side.</p>
            <h5 id="high-contrast">High Contrast</h5>
            <p>High-contrast, emphasizing enemies and the player with bright colors
                while dulling and darkening the background, is shown in Figure <a href="#fig:high-contrast"
                    data-reference-type="ref" data-reference="fig:high-contrast">1.4</a>. It is intended to help
                players with vision disabilities, such as color blindness or blurry
                vision.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/highcontrast.png`} id="fig:high-contrast"
                    alt="The tutorial level with high contrast enabled" />
                <figcaption aria-hidden="true">The tutorial level with high contrast
                    enabled</figcaption>
            </figure>
            <h5 id="auto-fire">Auto Fire</h5>
            <p>Rather than continuously firing projectiles, Auto Fire automatically
                fires projectiles if an enemy is directly ahead. The functionality
                behind this mechanic is shown in Figure <a href="#fig:ray-trace-hitbox" data-reference-type="ref"
                    data-reference="fig:ray-trace-hitbox">1.5</a>.
                This feature, compared to Auto Throw, is meant to cause less visual
                clutter due to unnecessary projectiles, and have higher accuracy for
                hitting enemies. This is intended primarily to help players with motor
                disabilities.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/RayTraceHitbox.png`} id="fig:ray-trace-hitbox"
                    alt="The hitbox used to detect enemies for Auto Fire" />
                <figcaption aria-hidden="true">The hitbox used to detect enemies for
                    Auto Fire</figcaption>
            </figure>
            <h5 id="narration">Narration</h5>
            <p>When Narration is enabled, all text in the game can be read aloud.
                This includes not only instructional text like that present in the
                tutorial and at the beginning of each level, but also menu items. Menu
                items will be read aloud when either selected or hovered over. The text
                indicating the game version will always have narration enabled,
                regardless of version. This feature is intended to aid players with
                vision disabilities, as well as any players who may have difficulties
                with reading for any other reason.</p>
            <h5 id="auto-jump">Auto Jump</h5>
            <p>Enabling Auto Jump causes the goblin to automatically jump at any
                spots where jumping is necessary to progress, such as at stairs or at
                the edge of pits. The functionality behind this mechanic is shown in
                Figure <a href="#fig:auto-jump-tiles" data-reference-type="ref" data-reference="fig:auto-jump-tiles">1.6</a>.
                This is intended to help
                players with motor disabilities, ideally allowing them to focus on
                horizontal movement only.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AutoJumpTiles.png`} id="fig:auto-jump-tiles"
                    alt="The tiles used to detect places the goblin should jump, normally invisible during gameplay" />
                <figcaption aria-hidden="true">The tiles used to detect places the
                    goblin should jump, normally invisible during gameplay</figcaption>
            </figure>
            <h5 id="edge-guard">Edge Guard</h5>
            <p>Partially inspired by the feature in <em>Mario Kart 8</em> that
                allows cars to be prevented from falling off the racetrack, enabling
                Edge Guard covers pits, eliminating them as a threat to the player <span className="citation"
                    data-cites="mariokart8"></span>. This is intended to
                help players with Motor disabilities, who may have more difficulty
                timing jumps over pits, or reacting in time to avoid running into them.
                This feature is shown in figures <a href="#fig:edge-guard-on" data-reference-type="ref"
                    data-reference="fig:edge-guard-on">1.7</a> and
                <a href="#fig:edge-guard-off" data-reference-type="ref" data-reference="fig:edge-guard-off">1.8</a>.
            </p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/PitEdgeGuard.png`} id="fig:edge-guard-on" alt="A pit with Edge Guard enabled" />
                <figcaption aria-hidden="true">A pit with Edge Guard
                    enabled</figcaption>
            </figure>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/PitNoEdgeguard.png`} id="fig:edge-guard-off" alt="A pit with Edge Guard disabled" />
                <figcaption aria-hidden="true">A pit with Edge Guard
                    disabled</figcaption>
            </figure>
            <h5 id="outlines">Outlines</h5>
            <p>Enabling outlines causes both the player and guards to have bright
                white outlines, intended to make them slightly easier to see. This
                setting works well with the high contrast setting, allowing the player
                and guards to stand out even more. This feature is intended to help
                players with vision disabilities. Outlines are shown in Figure <a href="#fig:outlines" data-reference-type="ref"
                    data-reference="fig:outlines">1.9</a>.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/outlines.png`} id="fig:outlines" alt="The goblin and guards with outlines enabled" />
                <figcaption aria-hidden="true">The goblin and guards with outlines
                    enabled</figcaption>
            </figure>
            <h5 id="environment-navigation-sounds">Environment Navigation
                Sounds</h5>
            <p>Enabling environment navigation causes pits to make a wind sound that
                gets louder as you approach. This is intended to allow players to be
                warned of pits with audio alone and help players with vision
                disabilities. A dedicated circular collider attached to the goblin was
                used to detect the distance from markers placed at the edges of pits to
                trigger the noise. The functionality behind this mechanic is shown in
                Figure <a href="#fig:pit-markers" data-reference-type="ref" data-reference="fig:pit-markers">1.10</a>.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/PitMarkers.png`} id="fig:pit-markers"
                    alt="The circular collider detects the pit markers (shown here as gray rectangles), enabling the wind noise" />
                <figcaption aria-hidden="true">The circular collider detects the pit
                    markers (shown here as gray rectangles), enabling the wind
                    noise</figcaption>
            </figure>
            <h5 id="alt-health">Alt Health</h5>
            <p>Enabling Alt Health moves the health meter from the top left corner
                of the screen to above the head of the goblin, as pictured in Figure <a href="#fig:alt-health"
                    data-reference-type="ref" data-reference="fig:alt-health">1.11</a>. This is to allow players who
                may struggle to see or notice things in their peripheral vision to more
                easily track their health. This is primarily intended to help players
                with vision disabilities.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AltHealth.png`} id="fig:alt-health" alt="The alternative health meter placement" />
                <figcaption aria-hidden="true">The alternative health meter
                    placement</figcaption>
            </figure>
            <h5 id="enemy-proximity-alert">Enemy Proximity Alert</h5>
            <p>Enabling enemy proximity alert causes an alarm sound to play when an
                enemy is directly ahead of the player, increasing in volume as the enemy
                gets closer. This is meant to allow players to know when to throw
                projectiles with audio alone. Unfortunately, due to a bug that was not
                noticed until the survey had concluded, this feature was not functional
                during the study.</p>
            <h5 id="difficulty">Difficulty</h5>
            <p>There are four different difficulty settings. The default is Normal,
                but the accessibility menu also allows the player to select Easy, Hard,
                and Invulnerable. Changing the difficulty affects game elements such as
                how fast the guards move, how much damage they deal, how long the goblin
                is immune to damage after being hit, and how fast the player can shoot
                projectiles. This is intended to help players with cognitive, vision,
                and motor disabilities.</p>
            <h5 id="speed">Speed</h5>
            <p>Changing the speed affects how fast everything in the game moves,
                including guards, the goblin, and projectiles. Gravity is also affected.
                This is meant to give the player more time to decide what action to
                take. The possible speed options are Normal, Slow, and Very Slow. This
                is intended to help players with cognitive and motor disabilities.</p>
            <h2 id="experiment-design">Experiment Design</h2>
            <p>The study was conducted by randomizing participants into either group
                A or group B. Randomization was done automatically by the game itself,
                with an equal chance for participants to end up in either group. Group A
                had access to all accessibility features, while group B had access to
                few features that could be considered accessibility features. The
                features group B still had access to included auto-fire, control
                remapping, keyboard UI controls, tutorial access, limited volume
                controls, and limited narration for specifying which version is being
                played. Players are not informed of the other version when playing, nor
                that there were differences between the versions, in order to reduce the
                chance of group B experiencing frustration due to knowledge of the
                missing features.</p>
            <p>Upon returning to the survey, participants were asked to specify
                which game version (and corresponding group) they were assigned, at
                which point participants were directed to the corresponding
                post-gameplay questions. Some of the questions differed depending on
                version, but both groups were asked identical questions on enjoyment,
                playtime, and perceived game difficulty.</p>
            <h2 id="survey-structure">Survey Structure</h2>
            <p>The survey consisted of consent forms, a pre-gameplay questionnaire,
                a link to play the game (for an amount of time of the participant’s
                choosing), and a post-gameplay questionnaire.</p>
            <p>The consent forms are preceded by a question asking if the person
                filling out the survey is an adult doing the study on their own, or a
                guardian and child filling out the survey together.</p>
            <p>The pre-gameplay questions ask for the participant’s age, and if they
                have any disabilities (with an “other” option for participants who may
                be unsure). They are asked what categories their disabilities fall
                under, if they have them. Those categories are motor, cognitive, vision,
                hearing, and speech, the categories used by the <em>Game Accessibility
                    Guidelines</em> <span className="citation" data-cites="accguidelines"></span>. There is also an “other” option,
                once again for the sake of uncertainty and nuance.</p>
            <p>Participants are asked if their disabilities have affected their
                ability to play video games or their enjoyment of video games in the
                past, with a short answer field for anyone who wishes to specify
                further.</p>
            <p>Finally, participants are asked if there have ever been any video
                games they would have liked to play but did not, due to lack of
                accessibility features.</p>
            <p>Participants are asked to play the <em>Goblin Escape</em> game in
                their browser for at least 5 minutes before answering the rest of the
                questions, though the informed consent form at the beginning of the form
                states that gameplay may be ended early at any time.</p>
            <p>For the post-gameplay questions, participants are first asked if they
                played Version A or Version B. Depending on the response, they will be
                directed to the relevant set of questions.</p>
            <p>Both sets of questions ask the participants to rate how much they
                enjoyed playing the game, on a scale from 0 (“Not at all”) to 10 (“I
                loved it!”). Participants are also asked how long they played the game
                for, and how difficult they found the game to be.</p>
            <p>Version A, which included all accessibility features, asks which
                accessibility features were enabled, if any, if the accessibility
                features were good enough for them to play the game as they wanted to,
                if there were any accessibility features which should have been
                included, but weren’t, and if the participant would have liked the game
                less without the accessibility features.</p>
            <p>Version B, which excluded and hid the options for the vast majority
                of the accessibility features, asks if participants would have liked the
                game more if it had accessibility features, and what accessibility
                features, if any, they wished the game had included.</p>
            <h2 id="recruiting">Recruiting<span id="recruiting"></span></h2>
            <p>Participants were recruited from various sources, such as LinkedIn,
                r/disabledgamers on Reddit, and word of mouth <span className="citation"
                    data-cites="linkedin disabledgamers"></span>. A large portion of
                participants were also recruited from students of the author’s advisor
                at Cal Poly.</p>
            <p>Friends and relatives were discouraged from participating to reduce
                bias.</p>
            <p>The survey was open to people of all ages and demographics, as
                approved by the Cal Poly IRB. Information was collected on which age
                groups participants belong to, what categories of disabilities they
                have, if any, and any other information freely offered. No other
                personal identifying information was requested, such name, specific age,
                birthday, location, or contact information.</p>
            <p>Some parts of the responses were excluded in specific cases as
                discussed in Chapter <a href="#chap:ResultsAnalysisDiscussion" data-reference-type="ref"
                    data-reference="chap:ResultsAnalysisDiscussion">[chap:ResultsAnalysisDiscussion]</a>.
                Incomplete responses were not recorded.</p>
            <h2 id="data-collection-and-analysis">Data Collection and Analysis</h2>
            <p>Microsoft Forms was used to gather data. In the middle of the survey,
                participants were directed to play the game in a separate browser tab.
                The game would randomly assign participants to either Version A or
                Version B. Depending on which version was selected in the survey,
                participants would then be directed to questions specific to the version
                chosen.</p>
            <p>Some basic information such as the number of participants, the number
                of answers for each question, and the number of people who chose
                specific answers, was collected directly from Microsoft Forms.</p>
            <p>Microsoft Excel was used for basic data sorting and simple summary
                through the use of Pivot Tables. The SciPy Python library was used for
                statistical testing, primarily to use Welch’s t-test to compare
                independent groups.</p>
            <p>Most quantitative data collected was categorical rather than
                continuous, so formal statistical tests were not appropriate in most
                cases. This quantitative data included numerical ratings on enjoyment of
                the game, and categorical responses (eg. age group, disability status
                and category, past game experience, playtime, difficulty, opinion on
                accessibility features).</p>
            <p>Qualitative data was also collected in a few instances through
                open-ended short-response questions, allowing participants to elaborate
                on their past experiences with disability and video games, identify
                which accessibility features they chose to use, or suggest features they
                wished the game had included. These responses were reviewed manually and
                grouped by recurring themes, with particular attention paid to topics
                that appeared frequently. The analysis focused on identifying common
                experiences, frequently used features, and the most commonly desired
                additions.</p>
            <h2 id="limitations-of-the-methodology">Limitations of the Methodology
                <span id="methodologylimitations"></span>
            </h2>
            <p>There were 52 total responses to the survey. No incentives were
                offered due to the anonymous and unmonitored nature of the survey
                distribution, which may have affected participation. The representation
                among the disabled community was especially limited. Efforts to recruit
                from disability-centric communities were handled with great care in
                order to avoid treating disabled individuals as test subjects.</p>
            <p>The survey would have been vulnerable to self-selection bias, as it
                would naturally attract players who care about game accessibility. This
                was likely somewhat mitigated by the first 30 respondents being
                recruited from a college class. However, said class was also on game
                development, so would have attracted students with an academic interest
                in video games. The disabled participants were primarily recruited from
                the<a
                    href="https://www.reddit.com/r/disabledgamers/comments/1kcmg64/study_of_accessibility_features_on_the_video_game/">
                    Disabled Gamers subreddit</a>, meaning they may not be an accurate
                representation of disabled video game players as a whole <span className="citation"
                    data-cites="disabledgamers"></span>.</p>
            <p>The limited number of sources for participants likely resulted in low
                demographic diversity.</p>
            <p>All data collected was self-reported rather than observed, meaning
                the data reflects subjective experiences rather than direct
                measurements.</p>
            <p>Most players only played the game for a short time, meaning that the
                significance of the results relating to long-term gameplay may be
                limited.</p>
            <p>The survey had a few issues. During the initial period of the study,
                a bug was present that caused approximately the first 30 participants to
                be directed to the Version A post-gameplay questions, regardless of
                which game version they played. This, unfortunately, severely limits the
                number of responses to the Version B-exclusive questions, though it does
                allow for some interesting insights from how the Version B players
                interpreted the Version A questions.</p>
            <p>Additionally, some questions could have been worded better. This is
                discussed in more detail in Section <a href="#ResultsReflections" data-reference-type="ref"
                    data-reference="ResultsReflections">[ResultsReflections]</a>.</p>
            <p>These limitations do not invalidate the results, but they do limit
                how broadly the findings can be generalized.</p>

            <h1 id="chap:ResultsAnalysisDiscussion">Results, Analysis, and
                Discussion</h1>
            <p>It is important to note before discussing survey results that for the
                majority of responses, an error was present that caused all participants
                to be directed to the post-gameplay questions for Version A, regardless
                of the version played. Some data for Version B participants affected by
                this issue was salvageable, but for some questions, very little usable
                data remains.</p>
            <h2 id="participant-overview">Participant Overview <span id="ParticipantOverview"></span></h2>
            <p>Participant recruitment is discussed in detail in Section <a href="#recruiting" data-reference-type="ref"
                data-reference="recruiting">[recruiting]</a>.</p>
            <p>In total, 52 participants completed the survey. Of these
                participants, 2 were minors accompanied by guardians, and 50 were
                adults.</p>
            <p>Some questions were required, while others were not. Some questions
                were excluded as they did not apply to every respondent, while others
                were excluded in case the respondent did not feel comfortable revealing
                the information.</p>
            <h3 id="age">Age</h3>
            <p>“How old are you?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AgeDistribution2.png`} id="fig:age-distribution" alt="Age Distribution of Participants" />
                <figcaption aria-hidden="true">Age Distribution of
                    Participants</figcaption>
            </figure>
            <p>This question was required. Likely primarily due to the sampling
                methods, the vast majority of respondents were adults. While there were
                two responses stated to be a minor and adult pair, there was only one
                under-18 response to this question. The distribution of participant ages
                is shown in Figure <a href="#fig:age-distribution" data-reference-type="ref"
                    data-reference="fig:age-distribution">1.1</a>.</p>
            <h3 id="disability-status">Disability Status</h3>
            <p>“Do you have any disabilities?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/disability_pie.png`} id="fig:disability-pie" alt="Portion of Participants with Disabilities" />
                <figcaption aria-hidden="true">Portion of Participants with
                    Disabilities</figcaption>
            </figure>
            <p>It is likely that some people may be disabled but lack legal
                disability status, or may or may not identify as disabled due to
                personal reasons. Due to this, for the question “Do you have any
                disabilities?” the definition of the word “disability” was intentionally
                left unspecified, instead leaving interpretation up to respondents. The
                distribution of responses to this question is shown in Figure <a href="#fig:disability-pie"
                    data-reference-type="ref" data-reference="fig:disability-pie">1.2</a>.</p>
            <p>This question was required. The majority of responses were no. The
                two “other” respondents were unsure if allergies and asthma, and ADHD,
                counted as disabilities. In terms of how each relates to playing video
                games, it is unlikely that allergies and asthma would have an effect
                except perhaps for games that incorporate physical movement, such as
                <em>Just Dance</em> or <em>Wii Fit</em>. ADHD is not a disorder that
                should significantly limit one’s ability to play any video game, but it
                could affect one’s gameplay experience when it comes to games that
                heavily feature memory-based tasks, or games with many possible
                activities where it may be difficult to stay focused on the main goal
                (Knowledge of ADHD comes from the author’s own experiences with it).
            </p>
            <h3 id="disability-categories">Disability Categories</h3>
            <p>“If you have any disabilities, what categories do those disabilities
                fall under?”</p>
            <div id="tab:disability-categories">
                <table>
                    <caption>Disability Categories of Participants</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left" }}><strong>Disability Category</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Count (%)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Motor</td>
                            <td style={{ textAlign: "center" }}>3 (21.4%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Cognitive</td>
                            <td style={{ textAlign: "center" }}>6 (42.9%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Vision</td>
                            <td style={{ textAlign: "center" }}>5 (35.7%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Hearing</td>
                            <td style={{ textAlign: "center" }}>3 (21.4%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Speech</td>
                            <td style={{ textAlign: "center" }}>2 (14.3%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center" }}>2 (14.3%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}><strong>Total Respondents</strong></td>
                            <td style={{ textAlign: "center" }}>14</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The number of responses to the question “If you have any
                disabilities, what categories do those disabilities fall under?” did not
                match the number of “yes” answers to the “Do you have any disabilities?”
                question. This discrepancy is resolved when including the “other”
                responses to said question in the total. Overall, the most commonly
                represented disability category was “Cognitive”. The second most common
                disability type was vision, perhaps due to the high likelihood of vision
                degrading as people age. The number of responses for each category is
                shown in Table <a href="#tab:disability-categories" data-reference-type="ref"
                    data-reference="tab:disability-categories">1.1</a>.</p>
            <h3 id="impact-of-disability-on-gaming-experiences">Impact of Disability
                on Gaming Experiences</h3>
            <p>“If you have any disabilities, have they affected your ability to
                play video games or enjoyment of video games in the past?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/DisabilityImpactOnGaming.png`} id="fig:disability-impact"
                    alt="Disability Impact on Past Game Experience" />
                <figcaption aria-hidden="true">Disability Impact on Past Game
                    Experience</figcaption>
            </figure>
            <p>There were far more responses to the question “If you have any
                disabilities, have they affected your ability to play video games or
                enjoyment of video games in the past?” than people who identified as
                disabled in the last two questions. It is possible that some respondents
                did not notice that this question was optional, and thus responded
                despite not identifying as disabled. The data in Figure <a href="#fig:disability-impact"
                    data-reference-type="ref" data-reference="fig:disability-impact">1.3</a> has been filtered to only
                include participants who identified as disabled. After filtering, the
                most common response was “Yes”, with one person selecting “Other” and
                writing “Sometimes my deafness has made certain games that rely on
                sounds more difficult.”. This seems to be an affirmative response. The
                respondent who was unsure if their ADHD counted as a disability also
                responded “Yes” to this question. The distribution of responses to this
                question is shown in Figure <a href="#fig:disability-impact" data-reference-type="ref"
                    data-reference="fig:disability-impact">1.3</a>.</p>
            <h3 id="impact-of-disability-on-games-played">Impact of Disability on
                Games Played</h3>
            <p>“Have there ever been video games that you would have liked to play
                but did not due to lack of accessibility features?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/ImpactofAccessibilityonGamesPlayed.png`} id="fig:games-not-played"
                    alt="Impact of Accessibility on Games Played by Disability Status" />
                <figcaption aria-hidden="true">Impact of Accessibility on Games Played
                    by Disability Status</figcaption>
            </figure>
            <p>As predicted, the majority of disabled participants responded “Yes”
                to the question “Have there ever been video games that you would have
                liked to play but did not due to lack of accessibility features?”. 2 out
                of 29 people who identified as not disabled responded “Yes”, suggesting
                that though they may not identify as disabled, there are some disability
                features they find valuable enough to affect their game preferences. The
                distribition of responses to this question is shown in figure  <a href="#fig:games-not-played"
                    data-reference-type="ref" data-reference="fig:games-not-played">1.4</a>.</p>
            <h2 id="quantitative-results">Quantitative Results<span id="QuantitativeResults"></span>
            </h2>
            <p>Overall, 28 people played Version A, and 24 played Version B.</p>
            <h3 id="enjoyment-scores">Enjoyment Scores</h3>
            <p>“How much did you enjoy playing the game?”</p>
            <p>After playing the game, respondents were asked “How much did you
                enjoy playing the game?” and prompted to rate the game on a scale
                between 0 (not at all) and 10 (I loved it!). Figure <a href="#fig:enjoyment-ratings-comparison"
                    data-reference-type="ref" data-reference="fig:enjoyment-ratings-comparison">1.5</a> shows the
                distribution of ratings for Version A and Version B.</p>
            <p>The average score for Version A was approximately 5.75, while the
                average score for Version B was approximately 6.63.</p>
            <p>Two players reported that they did not play the game. One stated that
                the game did not work properly in their browser, and the other stated
                that the game was not accessible enough for them to be able to play it
                in a reasonable amount of time with their disability. Both of these
                players rated the game 0/10. Removing these scores from the pool changes
                the average for Version A to 6.19.</p>
            <p>Because groups A and B were independent, Welch’s t-test, a test for
                comparing the means of two groups, was conducted on the scores to check
                the significance of the difference between the means. The resulting
                t-statistic was -1.296, and the P-value was 0.201, indicating that the
                difference in the averages was not statistically significant. Welch’s
                t-test was also chosen because the enjoyment scores seem to follow a
                normal distribution, but I could not be sure that group A and group B’s
                populations had the same variance <span className="citation" data-cites="welchttest"></span>.</p>
            <h5 id="discussion">Discussion</h5>
            <p>The prediction was that Version A would have an overall higher rating
                than Version B, due to Version A having more features, and those
                features being optional. However, the average score was higher for
                Version B. This could be due to unfamiliarity with accessibility
                features, frustration with features not working as well as expected, or
                simply random chance.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/EnjoymentRatingsChart.png`} id="fig:enjoyment-ratings-comparison"
                    alt="Comparison of Enjoyment Ratings Between Versions" />
                <figcaption aria-hidden="true">Comparison of Enjoyment Ratings Between
                    Versions</figcaption>
            </figure>
            <h3 id="playtime">Playtime</h3>
            <p>“How long did you play the game? (or about how long do you think you
                played the game?)”</p>
            <div id="tab:playtime">
                <table>
                    <caption>Playtime by Version</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left" }}><strong>Playtime</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Version A (n=28)</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Version B (n=24)</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Total (%)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Less than 5 minutes</td>
                            <td style={{ textAlign: "center" }}>11</td>
                            <td style={{ textAlign: "center" }}>12</td>
                            <td style={{ textAlign: "center" }}>23 (44.2%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>5-10 minutes</td>
                            <td style={{ textAlign: "center" }}>15</td>
                            <td style={{ textAlign: "center" }}>12</td>
                            <td style={{ textAlign: "center" }}>27 (51.9%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>11-20 minutes</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1 (1.9%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>More than 20 minutes</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1 (1.9%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Overall, the majority of respondents played the game for 10 minutes
                or less. However, it does seem that the playtime for Version A tended to
                be longer, as more players played for 5-10 minutes than for less than 5,
                and two players played for longer than 10 minutes. In Version B, the
                same number of players played for 5-10 minutes as for less than 5
                minutes, and none played for longer than 10 minutes. It is not possible
                to calculate an average for playtime, as playtime data was only
                collected in ranges. The number of responses for each range by version
                is shown in Table <a href="#tab:playtime" data-reference-type="ref" data-reference="tab:playtime">1.2</a>.</p>
            <h5 id="discussion-1">Discussion</h5>
            <p>The longer playtime for Version A could potentially indicate that
                players found Version A to be more engaging. Alternatively, players may
                have found Version A to be more difficult. Or, some players may have
                wanted to try out different accessibility features to give better
                feedback, and thus spent longer playing the game.</p>
            <h3 id="difficulty">Difficulty</h3>
            <p>“How difficult did you find the game?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/DifficultyAll.png`} id="fig:difficulty-all"
                    alt="Difficulty Ratings by Version (All Participants)" />
                <figcaption aria-hidden="true">Difficulty Ratings by Version (All
                    Participants)</figcaption>
            </figure>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/DifficultyDisabled.png`} id="fig:difficulty-disabled"
                    alt="Difficulty Ratings by Version (Disabled Participants)" />
                <figcaption aria-hidden="true">Difficulty Ratings by Version (Disabled
                    Participants)</figcaption>
            </figure>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/DifficultyNonDisableed.png`} id="fig:difficulty-non-disabled"
                    alt="Difficulty Ratings by Version (Non-Disabled Participants)" />
                <figcaption aria-hidden="true">Difficulty Ratings by Version
                    (Non-Disabled Participants)</figcaption>
            </figure>
            <p>Disabled participants seem to have experienced a much wider spread of
                difficulties than non-disabled participants. Three disabled participants
                ranked the game “difficult” or higher, all playing Version A. The player
                who ranked the game “very difficult” could not play the game as they
                found the accessibility features to be insufficient for them. One of the
                players who ranked the game “difficult” noted that they had a
                vision-related disability and “It would be nice if the text could be
                read out loud.” An available accessibility feature in Version A is
                “Narration”, which causes all menu items to be read aloud when selected,
                and tutorial text to be automatically narrated. It is possible this
                player could not easily identify this option due to their disability,
                which is an unfortunate and serious oversight. The disabled player to
                chose “difficult” noted that they would have liked to have subtitles for
                sounds, though it is not clear if this is why the game was difficult for
                them.</p>
            <p>Non-disabled players overwhelmingly found the game to be “Easy” or
                “Very Easy”.</p>
            <h5 id="discussion-2">Discussion</h5>
            <p>It was hypothesized that disabled players in particular would find
                Version A to be easier, but this did not seem to be the case. No clear
                trends seem to appear regarding difficulty when comparing Version A and
                Version B. This could be due to random chance, or it could be that the
                accessibility features in Version A were insufficient for some disabled
                players.</p>
            <p>This question did not account for variances in difficulty introduced
                by using the accessibility features. A non-disabled player could make
                the game significantly easier for themselves by using the accessibility
                features, for example. A better approach for the goals of this study may
                have been to ask if the game was more difficult than the players would
                like it to be, and if the option of the accessibility features made
                players feel that the game was not challenging.</p>
            <h3 id="accessibility-features-used">Accessibility Features Used</h3>
            <div id="tab:feature-mentions-total">
                <table>
                    <caption>Accessibility Features Mentioned by Participants</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left" }}><strong>Feature</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Disabled</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Non-Disabled</strong></th>
                            <th style={{ textAlign: "center" }}><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Auto Fire</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>4</td>
                            <td style={{ textAlign: "center" }}>5</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Auto Throw</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>2</td>
                            <td style={{ textAlign: "center" }}>3</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Auto Jump</td>
                            <td style={{ textAlign: "center" }}>2</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>3</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Volume Controls</td>
                            <td style={{ textAlign: "center" }}>2</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>2</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Narration</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>2</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Edge Guard</td>
                            <td style={{ textAlign: "center" }}>2</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>2</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Outlines</td>
                            <td style={{ textAlign: "center" }}>2</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>2</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Speed</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>2</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Control Remapping</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>1</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>High Contrast</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Alt Health</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Difficulty</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>1</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Footsteps</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Large UI</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Menu Button Navigation</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Color Design</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Environment Navigation Sounds</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left" }}>Enemy Proximity Alert</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left" }}>Tutorial</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The total number of mentions for each feature by disability group are
                shown in Table <a href="#tab:feature-mentions-total" data-reference-type="ref"
                    data-reference="tab:feature-mentions-total">1.3</a>.</p>
            <p>No features were mentioned by the two people who filled custom
                responses to the “Do you have any disabilities?” question.</p>
            <p>These results were drawn both from the answers to this question from
                Version A players, and the responses from Version B players who were
                given this question due to the error. 28 of the 43 responses to this
                question stated that no accessibility features were used. One person
                said “None. I think it shot projectiles for me automatically”, which was
                counted as a mention of Auto Throw.</p>
            <p>One player mentioned that they attempted to use narration, high
                contrast, and outlines, but were unable to exit the accessibility
                feature menu and play the game.</p>
            <h5 id="popular-features">Popular Features</h5>
            <p>Overall, Auto Fire and Auto Throw were the most common by far. It
                seems likely that some of the “Auto Fire” mentions may be “Auto Throw”
                mentions that were misattributed due to the similar names.</p>
            <p>Auto Jump was tried out by one non-disabled player and two disabled
                players. One of the disabled players mentioned that it “didn’t work well
                for [them]”, though they didn’t specify why.</p>
            <h5 id="less-popular-features">Less Popular Features</h5>
            <p>Two of the disabled players reduced or muted the volume.</p>
            <p>Edge Guard was mentioned by two disabled players, one of which was
                the player who did not find Auto Jump helpful. It seems that Edge Guard
                was helpful for them where Auto Jump was not.</p>
            <p>Narration was mentioned by one disabled player and one non-disabled
                player. It is notable that the non-disabled player also listed their
                game version as Version B, implying that the game version was listed
                incorrectly by mistake, that the narration referred to was the version
                narration present in both versions, or that some sort of bug had
                occurred.</p>
            <p>Outlines were mentioned by two disabled players, though further
                details were not provided.</p>
            <p>Slow speed was used by one disabled player and one non-disabled
                player.</p>
            <p>One disabled player mentioned using the difficulty setting, and that
                they set the difficulty to Hard.</p>
            <h5 id="unmentioned-features">Unmentioned Features</h5>
            <p>Seven features went unmentioned for this question. For Footsteps,
                Large UI, Menu Button Navigation, Color Design, and Tutorial, this is
                likely due to the fact that these features are not ones that must be
                enabled, but rather ones that are on by default. Though, as said in
                Section <a href="#versionBfeatures" data-reference-type="ref"
                    data-reference="versionBfeatures">[versionBfeatures]</a>, one player
                later mentions that the color scheme was accessible for them as a
                colorblind person. The lack of mention of menu-based button navigation
                could also be due to the lack of explicit instruction that such an
                option was available. It is possible that some players who would have
                liked to use this feature may not have if they did not know about
                it.</p>
            <p>Environment Navigation Sounds and Enemy Proximity Alert, both
                features designed to aid players with limited vision or blindness, went
                unused.</p>
            <h5 id="discussion-3">Discussion</h5>
            <p>It was expected that there would be far more mentions of control
                remapping, as it is a popular feature in many games. However, perhaps
                the default controls worked well enough that most players did not feel
                the need to change them. One player noted in a response to a different
                question that they tried to use control remapping, but it did not work
                for them due to a bug.</p>
            <p>High contrast was expected to be more popular with disabled players
                than it was.</p>
            <p>This question was not originally intended to be answered by any
                Version B players, but it was a welcome surprise that many minor
                features were identified as accessibility features.</p>
            <h3 id="accessibility-feature-sufficiency">Accessibility Feature
                Sufficiency</h3>
            <p>“Were the accessibility features good enough for you to play the game
                as you wanted to?”</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AccessibilityFeaturesSufficiencyPercentages2.png`} id="fig:accessibility-good-enough-percent"
                    alt="Perceived Sufficiency of Accessibility Features (Version A) as Percentage of Disability Group" />
                <figcaption aria-hidden="true">Perceived Sufficiency of Accessibility
                    Features (Version A) as Percentage of Disability Group</figcaption>
            </figure>
            <p>The results to this question shown in Figure <a href="#fig:accessibility-good-enough-percent"
                data-reference-type="ref" data-reference="fig:accessibility-good-enough-percent">1.9</a> have been
                filtered to only include responses from players who played Version A, as
                this was one of the questions affected by the survey error.</p>
            <p>Nearly all of the “Other” responses were people saying “n/a” or some
                variation, likely to indicate that they did not use any accessibility
                features. Two respondents noted that they did not need the accessibility
                features, but liked them, saying “Did not need to use accessibility
                features, but they are very useful for those who need them.” and “n/a,
                but the features were very cool”. A third person said, “Unknown because
                I could not click out of the accessibility menu to start the game”.</p>
            <p>Overall, about 70% of non-disabled participants found the
                accessibility features to be sufficient, and a little over 40% of
                disabled participants.</p>
            <p>Three people responded “No”; the features were not sufficient. One of
                these people identified as non-disabled. One of the disabled
                participants did not specify what they found to be insufficient, but
                picked “Motor”, “Cognitive”, “Vision”, and “Hearing” for disability
                categories, so it seems likely that the accessibility features overall
                would have needed to be higher quality and more in-depth to be
                sufficient. The other respondent seemed to be unable to find the
                “Narration” accessibility option, categorizing their disability as
                “Vision” and noting, “It would be nice if the text could be read out
                loud.”</p>
            <h5 id="discussion-4">Discussion</h5>
            <p>As expected, non-disabled players overwhelmingly found the
                accessibility features to be sufficient. A little over 40% of disabled
                players found the accessibility features sufficient, which is a lower
                value than desired, but higher than the percentage who found them
                insufficient. It was anticipated that a higher percentage of disabled
                players would find the features sufficient, but the results still
                suggest partial success.</p>
            <h3 id="preference-for-accessibility-features">Preference for
                Accessibility Features</h3>
            <p>“Would you have liked this game less without the accessibility
                features?” (Version A)</p>
            <p>“Would you have liked this game more if it had accessibility
                features?” (Version B)</p>
            <p>Responses of N/A have been counted as blank responses and
                excluded.</p>
            <figure>
                <img src={`${import.meta.env.BASE_URL}images/thesis_figures/AccessibilityFeaturePreference.png`} id="fig:feature-preference"
                    alt="Responses to Preference for Accessibility Features by Version" />
                <figcaption aria-hidden="true">Responses to Preference for Accessibility
                    Features by Version</figcaption>
            </figure>
            <h4 id="what-if-version-a-had-no-accessibility-features">What if Version
                A had no accessibility features?</h4>
            <p>The charts in Figure <a href="#fig:feature-preference" data-reference-type="ref"
                data-reference="fig:feature-preference">1.10</a> showcasing the
                responses to this question only exclude responses for the corresponding
                versions. Data for the question “Would you have liked this game less
                without the accessibility features?” that includes the Version B
                responses can be found in Table  <a href="#tab:liked-game-less-AB" data-reference-type="ref"
                    data-reference="tab:liked-game-less-AB">[tab:liked-game-less-AB]</a> in
                the Appendix.</p>
            <p>The first question received 4 custom responses, 2 for Version A and 2
                for Version B.</p>
            <p>One of the custom Version A responses simply said “unknown”, while
                the other said “I would not have needed to rely on key remapping if the
                controls weren’t clustered in the same place and aimed towards only the
                left hand.”</p>
            <p>The first Version B response said “I think having to shoot yourself
                would make the game more fun because right now you can just hold forward
                and auto fire and not even worry about the guards”. It is unclear how
                this response should be categorized.</p>
            <p>The second response said “If the tutorial bubble up top was an
                accessibility feature then I liked it even though I don’t usually look
                for that stuff”, which seems to imply that this player would have liked
                the game less if it did not have the tutorial and in-game instruction
                features.</p>
            <p>Overall, 59.3% of Version A players seemed to express indifference to
                the accessibility features, 18.5% would like the game less without the
                accessibility features, and the opinion of the remaining 22% is
                unclear.</p>
            <h4 id="what-if-version-b-had-accessibility-features">What if Version B
                had accessibility features? <span id="versionBfeatures"></span></h4>
            <p>Due to the previously mentioned error, the question “Would you have
                liked this game more if it had accessibility features?” received only 9
                responses.</p>
            <p>Only 1 player responded “Yes”, with the vast majority responding
                “Maybe”. 2 players responded “No”.</p>
            <p>One custom response was received, which stated, “It already had a
                color scheme that was easier to see.” The color scheme of the game was
                intentionally designed to be both simple and contrast well, and be
                minimally impacted by common types of color blindness. This response
                implies that if less consideration had been taken for the color scheme,
                the game would have been less enjoyable for this player.</p>
            <h5 id="discussion-5">Discussion</h5>
            <p>In hindsight, the question “Would you have liked this game less
                without the accessibility features?” is a bit confusing and potentially
                leading. A clearer way to word it may have been “Would you have liked
                this game less if it did not have accessibility features?” Additionally,
                the way this question is worded does not allow someone to communicate
                that they would have liked the game <em>more</em> if it did not have
                accessibility features, if anyone should hold that opinion.</p>
            <p>Perhaps the Version B question was responded to with more uncertainty
                than the Version A question because it is easier to identify features
                that would be missed or not missed than to know what features would
                improve a gameplay experience.</p>
            <h2 id="qualitative-insights">Qualitative Insights<span id="QualitativeInsights"></span>
            </h2>
            <p>Three questions in the survey were fully open-ended, short-response
                questions. One seeks more demographic information to help give context
                to later responses, and the other two seek opinions about the
                accessibility features included or excluded in the game.</p>
            <h3 id="effect-of-disability-on-gaming-experience-responses">Effect of
                disability on gaming experience responses</h3>
            <p>“If you want to, say more about how your disabilities have affected
                your experiences playing video games.”</p>
            <p>This question received 9 responses.</p>
            <p>Two participants discussed their ADHD, with one noting that “I’m bad
                at tracking everything going on in team based shooter games for
                example”, and the other noting that their ADHD causes them to have
                choice paralysis, making it difficult for them to choose which game to
                play.</p>
            <p>One responder states that they are quadriplegic, categorized under
                motor disability, and that “80% of my body doesn’t work, including my
                hands”, going on to note that not enough space was provided for them to
                properly answer the question.</p>
            <p>Two responders categorized their disabilities as vision only, saying
                “It can be hard to see what is going on when the game has a lot of
                visual information”, and “Some colors schemes or font sizes can be
                difficult to deal with.”</p>
            <p>One responder categorized their disabilities as cognitive only,
                noting that games can sometimes cause sensory overwhelm or induce
                vertigo, making it difficult to progress and sometimes causing them to
                need to stop playing.</p>
            <p>One responder categorized their disabilities under both motor and
                cognitive, saying, “Platformers are the bane of my gaming existence.
                Even when there are no stakes, I can get stuck for ages because I can’t
                jump correctly onto another platform. I also struggle with games that
                require timed inputs, holding buttons down, quick reaction speeds, and
                high precision. I often wish games had a “slow” option, where enemies
                move in slow motion in exchange for dealing more damage when they do hit
                you.”</p>
            <p>One responder categorized their disabilities under both hearing and
                vision, stating, “Text is often too small for me to read. And I can’t
                always understand spoken dialogue.”</p>
            <p>One responder categorized their disabilities under hearing,
                cognitive, and speech, stating that they have difficulty with games
                reliant on sound to play due to their deafness, as they cannot always
                tell which directions sounds come from, and that they tend to have
                trouble understanding spoken dialogue.</p>
            <h3 id="desired-accessibility-features">Desired accessibility
                features</h3>
            <h4 id="desired-features-for-version-a">Desired features for Version
                A</h4>
            <p>“Were there any accessibility features that should have been
                included, but weren’t?” (Version A)</p>
            <p>This question received 14 responses.</p>
            <p>Two of these responses were received on Version B. One person simply
                said “no”, while the other said the following:</p>
            <p>“No but would like to note the accessibility features kept me focused
                and knew how to play from the start, making me wanting to play (I am not
                diagnosed but pretty sure I have ADHD and dislike platformer games, this
                was actually not frustrating / boring though)”</p>
            <p>This player did not say they enabled an accessibility features. It
                seems likely that the accessibility features they refer to as helping
                them were probably the tutorial and instructional popups present in each
                level.</p>
            <p>There were 12 Version A responses.</p>
            <p>Five were “N/A” or a variation. One person said “I couldn’t think of
                any”, one said “no”, and one said “no, it has the standard ones”.</p>
            <p>The remaining 4 responses contained more feedback.</p>
            <p>“I would have liked an option where, if you touch an enemy and are
                damaged by it, you are pushed away from the enemy so you don’t continue
                to take damage. The requirement of a quick reaction (quick, walk
                backwards to stop taking damage!) was tricky for me.”</p>
            <p>This is a common feature in platformer games, and would likely have
                made the game both easier and more enjoyable even for non-disabled
                players.</p>
            <p>“It would be nice if the text could be read out loud.”</p>
            <p>This response makes me wonder if there was a lack of clarity in some
                way about the Narration feature (discussed in in Section <a href="#features" data-reference-type="ref"
                    data-reference="features">[features]</a>), or perhaps a bug that
                prevented it from working.</p>
            <p>“Scaling.”</p>
            <p>Scalable UI was a feature that was partially implemented, but
                unfortunately Itch.IO, the website where the game was hosted for the
                study, did not allow windows to be resized.</p>
            <p>“Subtitles for sounds (I did not find any, sorry if this exists)”</p>
            <p>This is a feature that was considered during development but
                dismissed as unnecessary. However, though gameplay is not reliant on
                sound, this is obviously a feature that was wanted, and could help deaf
                players feel more included.</p>
            <h4 id="desired-features-for-version-b">Desired features for Version
                B</h4>
            <p>“What accessibility features, if any, do you wish the game included?”
                (Version B)</p>
            <p>This question received only three responses.</p>
            <p>“Only thing I couldn’t here well was the voices (e.g. Version B). I
                adjusted the music down a bit and maybe I should have just adjusted that
                lower. Visually the text was very large and easy for me to read but I
                usually look for and adjust that even before playing.”</p>
            <p>A wider range for volume controls and better balancing of the default
                volume levels may have made the gameplay experience more enjoyable for
                this player. As mentioned in the Version A responses, scalable UI would
                have also been a good feature to include.</p>
            <p>“shooting controls for my right hand so i could do left-right
                direction with my left hand”</p>
            <p>Since remappable controls are already included, perhaps this person
                is asking for the direction of projectiles to be controllable separately
                from the player. Including this feature would add complexity to the
                controls, but perhaps allowing these controls to be separate could be
                optional. This would change the gameplay, but seems unlikely to do so in
                a significant capacity. Perhaps allowing the game to be controlled this
                way could be helpful for some players with motor related
                disabilities.</p>
            <p>“The ability to check the controls while paused, as I had difficulty
                remembering which buttons to press for each function.”</p>
            <p>This was technically available by checking the control remapping
                menu, but that menu is neither quick to access nor easy to draw
                information from at a glance. A simple list of assigned controls in the
                pause menu would have been a good feature.</p>
            <h3 id="insights">Insights</h3>
            <p>The desired features listed by the Version B players did not include
                any features present in Version A but not B, which was surprising.
                However, this question also only received three responses, so broad
                conclusions are difficult to draw.</p>
            <p>Resizable UI was mentioned twice as a desired feature.</p>
            <p>Overall, while the disabled players engaged far more with the
                accessibility features, many features did not go unappreciated by the
                non-disabled players.</p>
            <p>One player mentioned that they have struggled with platformers in the
                past, but seemed to be helped by the available accessibility
                features.</p>
            <p>As mentioned in Section <a href="#features" data-reference-type="ref" data-reference="features">[features]</a>,
                the Narration feature was
                intended to make text more accessible. However, one player with a
                vision-related disability seemed to have been unable to find or activate
                this feature, highlighting an issue with how it was implemented. Having
                it enabled by default, or prompting a choice to enable it right away,
                may have been a better approach.</p>
            <h2 id="comparative-analysis">Comparative Analysis<span id="ComparativeAnalysis"></span>
            </h2>
            <p>The longer playtime for Version A could suggest that players found it
                more engaging than Version B.</p>
            <p>The enjoyment score for Version B was slightly higher than for
                Version A, but this difference was not statistically significant.</p>
            <p>Disabled players tended to find the game more difficult than
                non-disabled players. This seemed to be slightly more common in Version
                A. One cause seems to be that some players had issue with playing the
                game or accessing features.</p>
            <p>Overall, accessibility features did not seem to increase player
                enjoyment, but it did allow some players to experience more of the game
                than they would have been able to without them. Additionally, the
                presence of accessibility features is seen positively by some
                non-disabled players, and some accessibility features are useful and
                popular among non-disabled players as well.</p>
            <h2 id="reflections">Reflections <span id="ResultsReflections"></span></h2>
            <p>It was hypothesized that Version A would receive higher enjoyment
                scores. However, the average enjoyment scores were slightly higher for
                Version B. It is possible this is due to the low sample size, but may
                also indicate discomfort with unfamiliar features. Some disabled players
                also found the accessibility features to be insufficient. Perhaps
                players tend to feel more frustration when features are provided but do
                not work well than when the features are not provided at all.</p>
            <p>Many modern games allow controls to be remapped, so this feature
                being used by only one participant was unexpected.</p>
            <p>If this study were to be repeated, a number of changes would be
                made.</p>
            <p>The error in assigning post-survey questions according to game
                version severely limited data for the Version B-specific questions. Test
                runs with the survey before opening the study to the public would reduce
                the risk of a similar mistake occurring again.</p>
            <p>As some adults may need assistance to fill out the survey, such as
                disabled adults with cognitive or vision disabilities, the first
                question of the survey which asks if the participant is a lone adult or
                accompanied minor is flawed. Additionally, there should have been
                clarification that for accompanied minors, the remaining questions in
                the survey should be filled out from the perspective of the minor.</p>
            <p>Requiring respondents to list out which accessibility features they
                used in a short response potentially could make it difficult to remember
                all features that were used. A checklist may have been a better
                alternative, and would also have made data processing simpler. However,
                one benefit of the short response method is that it leaves the
                interpretation of which features count as accessibility features more
                open, which allowed for some insights that would not have been gained
                otherwise. For example, Auto Throw, which was included for convenience
                and not thought of as an accessibility feature during development, was
                mentioned multiple times.</p>
            <p>In hindsight, the decision not to include hearing-focused features,
                such as captions, limited accessibility for at least one player. Adding
                captions for every sound effect may have added too much visual
                information, but perhaps particle effects or icons could have been used
                to indicate when things on screen were producing noise.</p>
            <p>The question for playtime did not include an option for people who
                were unable to play the game for any reason, making it impossible to
                differentiate between participants who played the game for some time
                less than 5 minutes, and participants who did not play the game at all.
                Other questions like the difficulty question would have also benefited
                from an option for people who did not play the game.</p>
            <p>The difficulty question was perhaps too open-ended, due to the large
                variance the accessibility features could introduce. More specific
                questions could lend more useful insights.</p>
            <p>Some of the accessibility features, such as auto throw, control
                remapping, and tutorial information, were used in both versions of the
                game. If these features had not been present in Version B, it may have
                changed the results. Some features that seen as nearly ubiquitous in the
                game industry were in both versions, but a more selective distrubution
                may result in clearer data on how the absence of accessibility features
                affects people’s gameplay experiences.</p>
            <h3 className="unnumbered" id="key-takeaways">Key Takeaways</h3>
            <ul>
                <li>
                    <p>Accessibility features did not significantly affect average
                        enjoyment scores, but they enabled broader engagement.</p>
                </li>
                <li>
                    <p>Some features were appreciated even by non-disabled players,
                        particularly Auto Fire and Auto Throw.</p>
                </li>
                <li>
                    <p>Far more disabled players than non-disabled players found the
                        game to be difficult, revealing accessibility gaps even in Version
                        A.</p>
                </li>
                <li>
                    <p>Feedback indicates players would have liked to have scalable UI
                        and better clarity on available features.</p>
                </li>
            </ul>

            <h1 id="conclusion-and-future-work">Conclusion and Future Work</h1>
            <h2 id="summary-of-research">Summary of Research</h2>
            <p>The purpose of this study was to explore how accessibility features
                impact player experience. For this goal, a game was developed that
                randomly assigned players to a version with many accessibility features
                available or a version with most of these features disabled.</p>
            <p>The results defied the hypotheses set in a few ways. It was predicted
                that the game version with all accessibility features enabled, Version
                A, would be rated as more enjoyable on average by players, but this was
                not the case. It was predicted that disabled players would find Version
                A easier than Version B, but no easily identifiable difference
                appeared.</p>
            <p>Though Version A received lower enjoyment scores, it tended to
                receive longer playtime. This result may have been due to random chance,
                could indicate that players found version A more difficult, or could
                indicate that players found it more engaging.</p>
            <p>In qualitative feedback, it was found that more disabled players
                found the accessibility features to be sufficient than insufficient.
                Additionally, the accessibility features were generally seen positively
                by both disabled and non-disabled players.</p>
            <p>These findings should be interpreted with the consideration that the
                sample size was limited to 52 participants, with only 12 identifying as
                disabled; the survey was likely impacted by sampling bias and
                subjectivity in answers, and gameplay duration was short.</p>
            <p>However, while this study had constraints, I believe it still offered
                meaningful insights into how all players engage with accessibility in
                games.</p>
            <h2 id="implementation-effort-vs.-impact">Implementation Effort
                vs. Impact</h2>
            <p>Some features were more challenging to implement than others. Note
                that these pertain to a Unity-based platformer game, and different games
                and engines may pose different challenges.</p>
            <p>Auto Fire and Auto Throw were both popular features that were
                relatively easy to implement. Holding down the throw button already
                caused the player to throw continuously, so implementing Auto Throw only
                required adding a toggleable variable that would enable this behavior
                automatically. Auto Fire involved adding a hitbox that detected enemies
                and triggered the same variable.</p>
            <p>Edge Guard was also relatively popular and simple to implement,
                requiring only the addition of a separate layer of terrain that could be
                enabled or disabled according to an Edge Guard setting.</p>
            <p>In-game narration for tutorial text was straightforward to implement,
                as it only required playing a sound effect when the triggers for the
                text were activated. More challenging was narration for the menu items,
                which required detecting when different elements were selected, whether
                by mouse or keyboard. Regardless of difficulty, this feature is
                especially important for players who may struggle with reading.</p>
            <p>Control remapping was one of the most challenging features to
                implement and was not widely used in this study, but remains a highly
                valuable option for players with motor disabilities.</p>
            <p>Volume controls also required a moderate level of effort to
                implement, but are a ubiquitous and essential feature, particularly for
                players who rely on sound effects.</p>
            <p>As more features were implemented, introducing new ones often became
                easier, as some could reuse existing functionality. For instance, the
                system enabling keyboard navigation of menus simplified the
                implementation of menu narration. Embedding accessibility considerations
                into the foundational systems of a game can reduce the cost and
                complexity of future accessibility efforts.</p>
            <h2 id="key-takeaways">Key Takeaways</h2>
            <p>The results of this study support the value of inclusive design.
                While increased accessibility features did not lead to a statistically
                significant increase in enjoyment scores, they allowed more players to
                engage with the game at a deeper level. Features such as Auto Throw,
                Auto Fire, Auto Jump and Narration were used and appreciated by both
                disabled and non-disabled players.</p>
            <p>This suggests that accessibility features can reduce barriers for
                disabled players while also increasing convenience and usability for
                others. Developers should see accessibility not as an afterthought, but
                as a feature that can create a more convenient experience for a larger
                pool of players.</p>
            <h2 id="future-work">Future Work</h2>
            <p>There are many ways the topics of this study could be expanded upon.
                Increasing sample size, particularly with disabled participants, would
                be valuable. Decreasing or altering the nature of the sampling bias,
                perhaps with some sort of incentive to participate, could also be
                valuable.</p>
            <p>A longer duration of gameplay with different genres of games could
                also be very valuable, allowing a more accurate representation of how
                players truly engage with games.</p>
            <p>A more objective way of collecting some data could also be
                beneficial, perhaps by analyzing gameplay performance through
                observation and scores.</p>
            <p>In future iterations, it would be beneficial for some of the survey
                questions to be reworded or redesigned, and for an open-ended question
                to be included at the end for any feedback that the other questions
                didn’t prompt. For example, the first question of the survey asks if
                participants are a lone adult, or a child accompanied by an adult. This
                unintentionally excludes any adults who may be helped by an assistant. A
                later question asks which accessibility features players used, if any,
                prompting a short response. This format allows for more variety in the
                possible responses, but a checklist of each feature would reduce the
                risk of specific features being forgotten.</p>
            <p>The limitations presented by the methodology were discussed in more
                detail in Section <a href="#methodologylimitations" data-reference-type="ref"
                    data-reference="methodologylimitations">[methodologylimitations]</a>,
                and reflections on beneficial changes to the approach after results were
                collected are discussed in Section <a href="#ResultsReflections" data-reference-type="ref"
                    data-reference="ResultsReflections">[ResultsReflections]</a>.</p>
            <h2 id="final-thoughts">Final Thoughts</h2>
            <p>Overall, though this study was not perfect, and there are many things
                I wish I’d done differently, I am very proud of my contributions to
                research on game accessibility. It was disappointing that clear
                numerical data that supported the value of accessibility features wasn’t
                found, but the value of them can be seen in other aspects of the
                results.</p>
            <p>I learned that implementing accessibility features with care is very
                challenging, but also very satisfying. Seeing that several accessibility
                features meaningfully improved the experience for players was especially
                rewarding.</p>
            <p>I hope that this study can be valuable for developers and other
                researchers going forward and that it encourages positive change for
                accessibility in the game industry.</p>

            <h1 id="survey-questions">Survey Questions</h1>
            <h2 id="pre-game-questions">Pre Game Questions</h2>
            <p>How old are you? (choose one)</p>
            <ul>
                <li><p>18-24</p></li>
                <li><p>25-34</p></li>
                <li><p>35-44</p></li>
                <li><p>45-54</p></li>
                <li><p>55-60</p></li>
                <li><p>60+</p></li>
            </ul>
            <p>Do you have any disabilities? (choose one)</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
            </ul>
            <p>If you have any disabilities, what categories do those disabilities
                fall under? (choose multiple)</p>
            <ul>
                <li><p>Motor: disabilities related to physical movement</p></li>
                <li><p>Cognitive: disabilities related to thought, memory, or
                    information processing</p></li>
                <li><p>Vision: disabilities related to sight</p></li>
                <li><p>Hearing: disabilities related to hearing</p></li>
                <li><p>Speech: disabilities relating to one’s ability to speak</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>If you have any disabilities, have they affected your ability to play
                video games or enjoyment of video games in the past? (choose one)</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>If you want to, say more about how your disabilities have affected
                your experiences playing video games: (short response)</p>
            <p>Have there ever been video games that you would have liked to play
                but did not due to lack of accessibility features? (choose one)</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
                <li><p>Maybe</p></li>
            </ul>
            <h2 id="post-game-questions">Post Game Questions</h2>
            <p>Once you are finished playing, which version of the game did you
                play? (choose one)</p>
            <ul>
                <li><p>A</p></li>
                <li><p>B</p></li>
            </ul>
            <h3 id="version-a-questions">Version A Questions</h3>
            <p>How much did you enjoy playing the game? (Rate on a scale from 0 (Not
                at all) to 10 (I loved it!))</p>
            <p>How long did you play the game? (or about how long do you think you
                played the game?)</p>
            <ul>
                <li><p>Less than 5 minutes</p></li>
                <li><p>5-10 minutes</p></li>
                <li><p>11-20 minutes</p></li>
                <li><p>More than 20 minutes</p></li>
            </ul>
            <p>How difficult did you find the game?</p>
            <ul>
                <li><p>Very Easy</p></li>
                <li><p>Easy</p></li>
                <li><p>Neutral</p></li>
                <li><p>Difficult</p></li>
                <li><p>Very Difficult</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>Which accessibility features did you enable, if any? (short
                response)</p>
            <p>Were the accessibility features good enough for you to play the game
                as you wanted to?</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>Were there any accessibility features that should have been included,
                but weren’t? (short response)</p>
            <p>Would you have liked this game less without the accessibility
                features?</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
                <li><p>Maybe</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <h3 id="version-b-questions">Version B Questions</h3>
            <p>How much did you enjoy playing the game? (Rate on a scale from 0 (Not
                at all) to 10 (I loved it!))</p>
            <p>How long did you play the game? (or about how long do you think you
                played the game?)</p>
            <ul>
                <li><p>Less than 5 minutes</p></li>
                <li><p>5-10 minutes</p></li>
                <li><p>11-20 minutes</p></li>
                <li><p>More than 20 minutes</p></li>
            </ul>
            <p>How difficult did you find the game?</p>
            <ul>
                <li><p>Very Easy</p></li>
                <li><p>Easy</p></li>
                <li><p>Neutral</p></li>
                <li><p>Difficult</p></li>
                <li><p>Very Difficult</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>Would you have liked this game more if it had accessibility
                features?</p>
            <ul>
                <li><p>Yes</p></li>
                <li><p>No</p></li>
                <li><p>Maybe</p></li>
                <li><p>Other (fill in own answer)</p></li>
            </ul>
            <p>Were there any accessibility features that should have been included,
                but weren’t? (short response)</p>

            <h1 id="tables">Tables</h1>
            <div id="tab:age">
                <table>
                    <caption>Responses to the question “How old are you?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Age Range</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Count (%)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Under 18</td>
                            <td style={{ textAlign: "center"}}>1 (1.9%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>18-24</td>
                            <td style={{ textAlign: "center"}}>33 (63.5%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>25-34</td>
                            <td style={{ textAlign: "center"}}>6 (11.5%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>35-44</td>
                            <td style={{ textAlign: "center"}}>1 (1.9%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>45-54</td>
                            <td style={{ textAlign: "center"}}>10 (19.2%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>55-60</td>
                            <td style={{ textAlign: "center"}}>1 (1.9%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>60+</td>
                            <td style={{ textAlign: "center"}}>0 (0%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}><strong>Total Respondents</strong></td>
                            <td style={{ textAlign: "center"}}>52</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:disabilities">
                <table>
                    <caption>Responses to the question “Do you have any
                        disabilities?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Count (%)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>12 (23.1%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>38 (73.1%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>2 (3.8%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}><strong>Total Respondents</strong></td>
                            <td style={{ textAlign: "center"}}>52</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:disabilities-enjoyment">
                <table>
                    <caption>Responses to the question “If you have any disabilities, have
                        they affected your ability to play video games or enjoyment of video
                        games in the past?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Count (% of total
                                responses)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>8 (28.6%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>19 (67.9%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>1 (3.6%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}><strong>Total Respondents</strong></td>
                            <td style={{ textAlign: "center"}}>28</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:enjoyment">
                <table>
                    <caption>Responses to the question “How much did you enjoy playing the
                        game?” on a scale from 0 (Not at all) to 10 (I loved it!)</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Rating (0–10)</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Version A (n=X)</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Version B (n=Y)</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Total (%)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>0–2 (Low Enjoyment)</td>
                            <td style={{ textAlign: "center"}}>4</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>6 (11.5%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>3–5 (Moderate)</td>
                            <td style={{ textAlign: "center"}}>6</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>8 (15.4%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>6–8 (High)</td>
                            <td style={{ textAlign: "center"}}>16</td>
                            <td style={{ textAlign: "center"}}>17</td>
                            <td style={{ textAlign: "center"}}>33 (63.5%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>9–10 (Very High)</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>5 (9.6%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Average Score</strong></td>
                            <td style={{ textAlign: "center"}}>5.75</td>
                            <td style={{ textAlign: "center"}}>6.63</td>
                            <td style={{ textAlign: "center"}}>6.15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:disability_access_avoidance">
                <table>
                    <caption>Responses to the question “Have there ever been video games
                        that you would have liked to play but did not due to lack of
                        accessibility features?” by disability status</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}></th>
                            <th colSpan={3}
                                style={{ textAlign: "center"}}><strong>Response</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Disabled</strong></td>
                            <td style={{ textAlign: "center"}}><strong>Yes</strong></td>
                            <td style={{ textAlign: "center"}}><strong>Maybe</strong></td>
                            <td style={{ textAlign: "center"}}><strong>No</strong></td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}><strong>Yes</strong></td>
                            <td style={{ textAlign: "center"}}>7</td>
                            <td style={{ textAlign: "center"}}>4</td>
                            <td style={{ textAlign: "center"}}>1</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>No</strong></td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>26</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}><strong>Other</strong></td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Total</strong></td>
                            <td style={{ textAlign: "center"}}>9</td>
                            <td style={{ textAlign: "center"}}>5</td>
                            <td style={{ textAlign: "center"}}>29</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:difficulty">
                <table>
                    <caption>Responses to the question “How difficult did you find the
                        game?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Difficulty Rating</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Version A</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Version B</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Very Easy</td>
                            <td style={{ textAlign: "center"}}>6</td>
                            <td style={{ textAlign: "center"}}>9</td>
                            <td style={{ textAlign: "center"}}>15 (28.8%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Easy</td>
                            <td style={{ textAlign: "center"}}>14</td>
                            <td style={{ textAlign: "center"}}>5</td>
                            <td style={{ textAlign: "center"}}>19 (36.5%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Neutral</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>9</td>
                            <td style={{ textAlign: "center"}}>12 (23.1%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Difficult</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>3 (5.8%)</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Very Difficult</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2 (3.8%)</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Other</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2 (1.9%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:features-good-enough">
                <table>
                    <caption>Responses to the Version A question “Were the accessibility
                        features good enough for you to play the game as you wanted
                        to?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Version A</strong></th>
                            <th style={{ textAlign: "center"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>31</td>
                            <td style={{ textAlign: "center"}}></td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}></td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}></td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Total</td>
                            <td style={{ textAlign: "center"}}>37</td>
                            <td style={{ textAlign: "center"}}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:liked-game-less-AB">
                <table>
                    <caption>Responses to the Version A question “Would you have liked this
                        game less without the accessibility features?” (Including Version B
                        responses)</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Non-Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Other</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>5</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Maybe</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>4</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>6</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>22</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>26</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>4</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Total</strong></td>
                            <td style={{ textAlign: "center"}}>8</td>
                            <td style={{ textAlign: "center"}}>31</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>41</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:liked-game-less-A">
                <table>
                    <caption>Responses to the Version A question “Would you have liked this
                        game less without the accessibility features?” (Excluding Version B
                        responses)</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Non-Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Other</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>5</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Maybe</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>4</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>13</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>16</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Total</strong></td>
                            <td style={{ textAlign: "center"}}>7</td>
                            <td style={{ textAlign: "center"}}>19</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>27</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="tab:liked-game-more">
                <table>
                    <caption>Responses to the Version B question “Would you have liked this
                        game more if it had accessibility features?”</caption>
                    <thead>
                        <tr className="header">
                            <th style={{ textAlign: "left"}}><strong>Response</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Non-Disabled</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Other</strong></th>
                            <th style={{ textAlign: "center"}}><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>Yes</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>1</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Maybe</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>3</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>5</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}>No</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>2</td>
                        </tr>
                        <tr className="even">
                            <td style={{ textAlign: "left"}}>Other (Fill in own response)</td>
                            <td style={{ textAlign: "center"}}>1</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>1</td>
                        </tr>
                        <tr className="odd">
                            <td style={{ textAlign: "left"}}><strong>Total</strong></td>
                            <td style={{ textAlign: "center"}}>4</td>
                            <td style={{ textAlign: "center"}}>5</td>
                            <td style={{ textAlign: "center"}}>0</td>
                            <td style={{ textAlign: "center"}}>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>);
}