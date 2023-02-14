'use client';

import { Poppins } from '@next/font/google'
import HowTo from './components/HowTo';
import Post from './components/Post';
import posts from '../data.json'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "700"] })

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <HowTo />

      {/* multiline test */}
      <Post
        url=""
        author="Omg omg this author name is so unreasonably long, is it german? Who could possible have such a long name?"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneSYMJIJ5V5tp5kLoZSsBmetmHJWVx9okepTONAzYyRy0NrOI"
        age="Jan 27, 2023"
        episode_title="Very very long episode title, oh wow, this title is very long. 2023 Big Ideas in Technology (Part 2)"
        episode_description="At the end of 2022, our team at a16z asked dozens of partners across the firm to spotlight one big idea that startups in their fields could tackle in 2023.\n\nEmerging from this exercise came 40+ builder-worthy pursuits for the year, ranging from entertainment franchise games to precision delivery of medicine to small modular reactors, and of course loads of AI applications.\n\nIn our 2-part series, we\u2019ll be covering 12 of these big ideas with the partners that shared them.\n\nHere in part 2, we\u2019ll cover Fintech, American Dynamism, and Bio & Health. Listen in as we chat with Anish Acharya, Angela Strange, Michelle Volz, Ryan McEntush, Vijay Pande, and Julie Yoo.\n\nAnd for the full list of 40+ ideas, check out the full article: https://a16z.com/2022/12/15/big-ideas-in-tech-2023/\n\nTopics Covered:\n\n  * (0:59) GPT Unlocks Credit Counseling - Anish Acharya\n  * (9:53) Compliance as a Competitive Advantage - Angela Strange\n  * (23:31) Small Modular Reactors Advance the Nuclear Renaissance - Michelle Volz\n  * (33:48) Overhauling the Space Supply Chain - Ryan McEntush\n  * (44:40) The Biggest Company in the World - Vijay Pande\n  * (51:17) The Value-Based Care Stack - Julie Yoo\n\nResources:\n\nhttps://a16z.com/2022/11/02/america-space-age/\n\nhttps://a16z.com/2022/11/11/the-biggest-company-in-the-world/\n\nhttps://a16z.com/2021/01/08/the-new-tech-stack-for-virtual-first-care/\n\nStay Updated:\n\nFind us on Twitter: https://twitter.com/a16z\n\nFind us on LinkedIn: https://www.linkedin.com/company/a16z\n\nSubscribe on your favorite podcast app: https://a16z.simplecast.com/\n\nFollow our host: https://twitter.com/stephsmithio\n\nPlease note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. For more details please see a16z.com/disclosures."
      />

      {posts.map((post) => (
        <Post key={post.episode_title} {...post} />
      ))}
    </main>
  )
}
