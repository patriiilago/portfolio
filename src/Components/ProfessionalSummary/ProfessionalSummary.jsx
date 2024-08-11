import { Row, Col } from "react-bootstrap"
import "./ProfessionalSummary.css"

const ProfessionalSummary = () => {


    return (
        <article className="summarySection">
            <Row className="professionalSummaryRow">

                <Col className="summaryExperience">
                    <p className="yearExperience">1</p>
                    <p className="textExperience">year of experience</p>
                </Col>

                <Col className="summaryProjects">
                    <p className="numberProjects">3</p>
                    <p className="textProjects">Finished  proyects</p>
                </Col>

                <Col className="summarySkills">
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M18 15.165C19.545 15.165 20.805 16.425 20.805 18C20.805 19.5 19.545 20.775 18 20.775C16.455 20.775 15.195 19.5 15.195 18C15.195 16.425 16.455 15.165 18 15.165ZM11.055 30C12 30.57 14.07 29.7 16.455 27.45C15.675 26.565 14.91 25.605 14.19 24.6C12.9813 24.4835 11.7797 24.3032 10.59 24.06C9.825 27.27 10.11 29.475 11.055 30ZM12.12 21.39L11.685 20.625C11.52 21.06 11.355 21.495 11.25 21.915C11.655 22.005 12.105 22.08 12.57 22.155L12.12 21.39ZM21.93 20.25L23.145 18L21.93 15.75C21.48 14.955 21 14.25 20.565 13.545C19.755 13.5 18.9 13.5 18 13.5C17.1 13.5 16.245 13.5 15.435 13.545C15 14.25 14.52 14.955 14.07 15.75L12.855 18L14.07 20.25C14.52 21.045 15 21.75 15.435 22.455C16.245 22.5 17.1 22.5 18 22.5C18.9 22.5 19.755 22.5 20.565 22.455C21 21.75 21.48 21.045 21.93 20.25ZM18 10.17C17.715 10.5 17.415 10.845 17.115 11.25H18.885C18.585 10.845 18.285 10.5 18 10.17ZM18 25.83C18.285 25.5 18.585 25.155 18.885 24.75H17.115C17.415 25.155 17.715 25.5 18 25.83ZM24.93 6C24 5.43 21.93 6.3 19.545 8.55C20.325 9.435 21.09 10.395 21.81 11.4C23.04 11.52 24.255 11.7 25.41 11.94C26.175 8.73 25.89 6.525 24.93 6ZM23.88 14.61L24.315 15.375C24.48 14.94 24.645 14.505 24.75 14.085C24.345 13.995 23.895 13.92 23.43 13.845L23.88 14.61ZM26.055 4.035C28.26 5.295 28.5 8.61 27.57 12.48C31.38 13.605 34.125 15.465 34.125 18C34.125 20.535 31.38 22.395 27.57 23.52C28.5 27.39 28.26 30.705 26.055 31.965C23.865 33.225 20.88 31.785 18 29.04C15.12 31.785 12.135 33.225 9.93 31.965C7.74 30.705 7.5 27.39 8.43 23.52C4.62 22.395 1.875 20.535 1.875 18C1.875 15.465 4.62 13.605 8.43 12.48C7.5 8.61 7.74 5.295 9.93 4.035C12.135 2.775 15.12 4.215 18 6.96C20.88 4.215 23.865 2.775 26.055 4.035ZM25.62 18C26.13 19.125 26.58 20.25 26.955 21.39C30.105 20.445 31.875 19.095 31.875 18C31.875 16.905 30.105 15.555 26.955 14.61C26.58 15.75 26.13 16.875 25.62 18ZM10.38 18C9.87 16.875 9.42 15.75 9.045 14.61C5.895 15.555 4.125 16.905 4.125 18C4.125 19.095 5.895 20.445 9.045 21.39C9.42 20.25 9.87 19.125 10.38 18ZM23.88 21.39L23.43 22.155C23.895 22.08 24.345 22.005 24.75 21.915C24.645 21.495 24.48 21.06 24.315 20.625L23.88 21.39ZM19.545 27.45C21.93 29.7 24 30.57 24.93 30C25.89 29.475 26.175 27.27 25.41 24.06C24.255 24.3 23.04 24.48 21.81 24.6C21.09 25.605 20.325 26.565 19.545 27.45ZM12.12 14.61L12.57 13.845C12.105 13.92 11.655 13.995 11.25 14.085C11.355 14.505 11.52 14.94 11.685 15.375L12.12 14.61ZM16.455 8.55C14.07 6.3 12 5.43 11.055 6C10.11 6.525 9.825 8.73 10.59 11.94C11.7797 11.6968 12.9813 11.5165 14.19 11.4C14.91 10.395 15.675 9.435 16.455 8.55Z" fill="white" />
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M19.323 18C21.078 18 22.5 19.3425 22.5 21C22.5 22.6575 21.078 24 19.323 24H15.9C14.769 24 14.2035 24 13.851 23.649C13.5 23.295 13.5 22.731 13.5 21.6V18M19.323 18C21.078 18 22.5 16.6575 22.5 15C22.5 13.3425 21.078 12 19.323 12H15.9C14.769 12 14.2035 12 13.851 12.351C13.5 12.705 13.5 13.269 13.5 14.4V18M19.323 18H13.5" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M33 18C32.2044 18 31.4413 17.6839 30.8787 17.1213C30.3161 16.5587 30 15.7956 30 15V12C30 7.035 28.965 6 24 6H12C7.035 6 6 7.035 6 12V15C6 15.7956 5.68393 16.5587 5.12132 17.1213C4.55871 17.6839 3.79565 18 3 18M3 18C3.79565 18 4.55871 18.3161 5.12132 18.8787C5.68393 19.4413 6 20.2044 6 21V24C6 28.965 7.035 30 12 30H24C28.965 30 30 28.965 30 24V21C30 20.2044 30.3161 19.4413 30.8787 18.8787C31.4413 18.3161 32.2044 18 33 18" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M16.761 33.8325C17.145 34.041 17.5575 34.1595 18 34.1595C18.4425 34.1595 18.885 34.0395 19.239 33.8925L31.011 27.0345C31.7775 26.589 32.25 25.758 32.25 24.867V11.181C32.25 10.2915 31.7775 9.459 31.011 9.015L19.239 2.157C18.8579 1.95296 18.4323 1.8462 18 1.8462C17.5677 1.8462 17.1421 1.95296 16.761 2.157L4.989 9.015C4.61121 9.23628 4.298 9.5527 4.08061 9.93275C3.86321 10.3128 3.74923 10.7432 3.75 11.181V24.867C3.75 25.758 4.2225 26.589 4.989 27.0345L8.0865 28.8165C9.591 29.5575 10.1235 29.5575 10.8015 29.5575C13.014 29.5575 14.2815 28.1925 14.2815 25.8465V12.339C14.2804 12.2456 14.2429 12.1563 14.1772 12.0899C14.1114 12.0236 14.0224 11.9854 13.929 11.9835H12.4245C12.3308 11.9851 12.2415 12.0231 12.1754 12.0894C12.1093 12.1558 12.0717 12.2453 12.0705 12.339V25.8465C12.0705 26.886 10.9785 27.9255 9.237 27.0345L6.0225 25.164C5.9025 25.104 5.8455 24.957 5.8455 24.837V11.1525C5.8455 11.0325 5.904 10.884 6.0225 10.8255L17.7945 3.9975C17.8815 3.9375 18.03 3.9375 18.147 3.9975L29.9205 10.8255C30.0375 10.8855 30.0975 11.004 30.0975 11.1525V24.837C30.0975 24.987 30.0375 25.104 29.9205 25.164L18.147 32.022C18.0585 32.082 17.9115 32.082 17.793 32.022L14.7855 30.21C14.697 30.15 14.5785 30.12 14.49 30.18C13.665 30.6555 13.5165 30.714 12.72 30.981C12.543 31.041 12.249 31.1595 12.8385 31.4865L16.761 33.8325ZM15.4335 20.355C15.4335 22.374 16.4955 24.7485 21.6585 24.7485C25.3755 24.7485 27.5295 23.2635 27.5295 20.652C27.5295 18.099 25.818 17.415 22.1895 16.941C18.5295 16.4655 18.147 16.1985 18.147 15.3375C18.147 14.625 18.4725 13.6755 21.186 13.6755C23.6055 13.6755 24.519 14.2095 24.8745 15.8415C24.8913 15.9157 24.9322 15.9823 24.9908 16.0309C25.0494 16.0794 25.1224 16.1073 25.1985 16.11H26.7615C26.8515 16.11 26.9385 16.05 26.9985 15.99C27.0558 15.9127 27.0868 15.8192 27.087 15.723C26.8515 12.873 24.993 11.568 21.216 11.568C17.853 11.568 15.846 12.993 15.846 15.3975C15.846 17.979 17.853 18.6915 21.0675 19.0185C24.933 19.4055 25.2285 19.9695 25.2285 20.7405C25.2285 22.0755 24.1665 22.641 21.6885 22.641C18.561 22.641 17.8815 21.8685 17.646 20.295C17.646 20.118 17.499 19.998 17.322 19.998H15.7875C15.6936 19.9996 15.604 20.0378 15.5379 20.1045C15.4717 20.1712 15.4343 20.2611 15.4335 20.355Z" fill="white" />
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_13_83)">
                                <path d="M17.8686 1.20144L18.7542 0.390239C18.6417 0.267274 18.5049 0.169072 18.3524 0.101885C18.2 0.0346983 18.0352 0 17.8686 0C17.7019 0 17.5371 0.0346983 17.3847 0.101885C17.2322 0.169072 17.0954 0.267274 16.983 0.390239L17.8686 1.20144ZM17.8686 32.4014L16.9254 33.143C17.0376 33.2858 17.1809 33.4012 17.3443 33.4806C17.5076 33.5599 17.6869 33.6012 17.8686 33.6012C18.0502 33.6012 18.2295 33.5599 18.3928 33.4806C18.5562 33.4012 18.6995 33.2858 18.8118 33.143L17.8686 32.4014ZM19.0686 36.0014V1.20144H16.6686V36.0014H19.0686ZM18.8118 31.6598L11.907 22.8734L10.0206 24.3566L16.9254 33.1454L18.8118 31.6598ZM12.4374 8.90064L18.7566 2.01264L16.983 0.390239L10.6686 7.27824L12.4374 8.90064ZM16.983 2.01264L23.2997 8.90064L25.0686 7.28064L18.7542 0.392639L16.983 2.01264ZM23.8302 22.871L16.9254 31.6598L18.8118 33.143L25.7166 24.3566L23.8302 22.871ZM23.2997 8.90304C25.0291 10.7909 26.0315 13.2317 26.1282 15.7901C26.2249 18.3485 25.4096 20.858 23.8277 22.871L25.7166 24.3566C27.65 21.8958 28.6463 18.8257 28.5276 15.6985C28.4089 12.5712 27.183 9.58782 25.0686 7.28064L23.2997 8.90304ZM11.907 22.8734C10.3254 20.8601 9.51053 18.348 9.60768 15.7897C9.70482 13.2313 10.7077 10.7906 12.4374 8.90304L10.6686 7.27824C8.55413 9.58542 7.32821 12.5688 7.20952 15.6961C7.09083 18.8233 8.08709 21.891 10.0206 24.3518L11.907 22.8734Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M15 30.852C9.8565 32.5875 5.571 30.852 3 25.5" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 33V28.137C15 27.24 15.276 26.46 15.72 25.755C16.026 25.272 15.816 24.585 15.2655 24.435C10.701 23.178 7.5 21.1605 7.5 14.4675C7.5 12.7275 8.07 11.0925 9.072 9.6675C9.321 9.3135 9.447 9.1365 9.477 8.9775C9.507 8.8155 9.4545 8.607 9.3495 8.187C8.925 6.483 8.9535 4.6725 9.5895 3.042C9.5895 3.042 10.905 2.6115 13.9005 4.482C14.5845 4.9095 14.9265 5.124 15.228 5.172C15.5295 5.22 15.9315 5.1195 16.7355 4.9185C17.8851 4.63349 19.0657 4.49291 20.25 4.5C21.4343 4.49495 22.6147 4.63601 23.7645 4.92C24.5685 5.121 24.972 5.22 25.2735 5.1735C25.5735 5.1255 25.9155 4.911 26.5995 4.4835C29.595 2.613 30.9105 3.0435 30.9105 3.0435C31.5465 4.674 31.575 6.4845 31.1505 8.1885C31.0455 8.6085 30.9945 8.8185 31.0245 8.9775C31.0545 9.1365 31.179 9.315 31.428 9.669C32.43 11.094 33 12.729 33 14.469C33 21.162 29.799 23.1795 25.2345 24.4335C24.684 24.585 24.474 25.272 24.78 25.7535C25.224 26.4585 25.5 27.2385 25.5 28.137V33" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_13_91)">
                                <path d="M30 19.2V18.7992C30 17.0328 28.5672 15.6 26.8008 15.6H24C23.0452 15.6 22.1296 15.9793 21.4544 16.6544C20.7793 17.3295 20.4 18.2452 20.4 19.2C20.4 20.1548 20.7793 21.0704 21.4544 21.7456C22.1296 22.4207 23.0452 22.8 24 22.8H26.4C27.3548 22.8 28.2705 23.1793 28.9456 23.8544C29.6207 24.5295 30 25.4452 30 26.4C30 27.3548 29.6207 28.2704 28.9456 28.9456C28.2705 29.6207 27.3548 30 26.4 30H24C23.0452 30 22.1296 29.6207 21.4544 28.9456C20.7793 28.2704 20.4 27.3548 20.4 26.4M15.6 14.4V26.4C15.6 27.3548 15.2207 28.2704 14.5456 28.9456C13.8705 29.6207 12.9548 30 12 30C11.0452 30 10.1296 29.6207 9.45443 28.9456C8.7793 28.2704 8.40001 27.3548 8.40001 26.4M1.20001 1.2H34.8V34.8H1.20001V1.2Z" stroke="white" stroke-width="2" />
                            </g>
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_13_93)">
                                <path d="M36 27.882C35.476 28.0798 34.8978 28.0792 34.3742 27.8803C33.8507 27.6814 33.4179 27.2979 33.1575 26.802L27.9825 19.6455L27.2325 18.645L21.228 26.811C20.9835 27.2863 20.5742 27.6562 20.0767 27.8517C19.5793 28.0471 19.0276 28.0547 18.525 27.873L26.262 17.493L19.065 8.1165C19.5825 7.93001 20.1484 7.92754 20.6675 8.1095C21.1866 8.29145 21.6272 8.64673 21.915 9.1155L27.279 16.3605L32.673 9.1455C32.9194 8.67868 33.3288 8.31868 33.8232 8.13394C34.3177 7.9492 34.8629 7.9526 35.355 8.1435L32.562 11.85L28.779 16.7745C28.6739 16.8682 28.5899 16.9831 28.5323 17.1115C28.4747 17.24 28.445 17.3792 28.445 17.52C28.445 17.6608 28.4747 17.8 28.5323 17.9284C28.5899 18.0569 28.6739 18.1718 28.779 18.2655L35.985 27.8835L36 27.882ZM0.00298914 17.364L0.632989 14.2515C2.36399 8.097 9.41999 5.5365 14.274 9.3465C17.1165 11.58 17.826 14.742 17.6865 18.306H1.67399C1.41449 24.6705 6.00749 28.5135 11.88 26.55C12.8318 26.2071 13.6838 25.6335 14.3597 24.8807C15.0356 24.1278 15.5143 23.2192 15.753 22.236C16.0635 21.237 16.575 21.066 17.514 21.354C17.3572 22.5725 16.9263 23.7396 16.2537 24.7676C15.5811 25.7956 14.6842 26.6579 13.6305 27.2895C11.8897 28.2422 9.89225 28.6199 7.92384 28.3685C5.95542 28.1171 4.11695 27.2496 2.67149 25.89C1.2425 24.2808 0.378645 22.2486 0.211489 20.103C0.211489 19.7505 0.0914891 19.4205 0.0104891 19.104C0.00317293 18.5245 -0.000327146 17.945 -1.08578e-05 17.3655L0.00298914 17.364ZM1.69349 16.935H16.1745C16.0845 12.321 13.173 9.048 9.28949 9.018C4.96649 8.958 1.87349 12.159 1.68299 16.914L1.69349 16.935Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M6 4.5L8.667 30.135L18 33L27.333 30.135L30 4.5H6Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.5 10.5H11.25L12 17.25H24L23.25 25.5L18 27L12.75 25.5L12.375 21.75" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="iconSummarySkills">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                            <path d="M6 4.5L8.667 30.135L18 33L27.333 30.135L30 4.5H6Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 10.5H24.75L23.25 25.5L18 27L12.75 25.5L12.375 21.75M24 17.25H11.25" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Col>

            </Row>

        </article>

    )


}
export default ProfessionalSummary



