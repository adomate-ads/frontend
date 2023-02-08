import apiUrl from "@/utils/api";
import type { Link } from "@/types";

const ProfileLinks: Link[] = [
  {
    title: "Dashboard",
    href: `https://dashboard.adomate.tech/`,
    sameWindow: true,
  },
  {
    title: "Support",
    href: `/support`,
    sameWindow: true,
  },
  {
    title: "Logout",
    href: `${apiUrl}/v1/user/logout?redirect=${window.location.href}`,
    sameWindow: true,
  },
];

const Links: Link[] = [
  {
    title: "Home",
    to: { name: "Home" },
  },
  {
    title: "About",
    to: { name: "About" },
  },
  {
    title: "Solutions",
    to: "#",
    sublinks: [
      {
        to: { name: "Google-Ads" },
        title: "Google Ads",
      },
      {
        to: { name: "SEO-Monitoring" },
        title: "SEO Monitoring",
      },
    ],
  },
  {
    to: { name: "Pricing" },
    title: "Pricing",
  },
];

const FooterLinks: Link[] = [
  {
    title: "About Us",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "Mission and Vision",
      },
      {
        to: { name: "NotFound" },
        title: "Our Team",
      },
      {
        to: { name: "NotFound" },
        title: "Careers",
      },
      {
        to: { name: "NotFound" },
        title: "Press and Media",
      },
      {
        to: { name: "NotFound" },
        title: "Testimonials",
      },
    ],
  },
  {
    title: "Discover",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "Our Blog",
      },
      {
        to: { name: "NotFound" },
        title: "Plans and Pricing",
      },
      {
        to: { name: "NotFound" },
        title: "Knowledge Base",
      },
      {
        to: { name: "NotFound" },
        title: "Cookie Policy",
      },
    ],
  },
  {
    title: "Support",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "FAQs",
      },
      {
        to: { name: "NotFound" },
        title: "Dashboard Help",
      },
      {
        to: { name: "NotFound" },
        title: "Live Chat",
      },
      {
        to: { name: "NotFound" },
        title: "Contact Us",
      },
      {
        to: { name: "NotFound" },
        title: "Support Center",
      },
    ],
  },
  {
    title: "Useful Links",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "Request a quote",
      },
      {
        to: { name: "NotFound" },
        title: "How it works",
      },
      {
        to: { name: "NotFound" },
        title: "Pricing",
      },
      {
        to: { name: "NotFound" },
        title: "Reviews",
      },
      {
        to: { name: "NotFound" },
        title: "Case Studies",
      },
    ],
  },
];

// Allow merging sublinks by title
const MergeLinks = (incomingLinks: Link[]): void => {
  incomingLinks.forEach((link) => {
    // Check if title is Profile, if so, add to Profile links
    if (link.title === "Profile") {
      if (link.sublinks) {
        ProfileLinks.push(...link.sublinks);
      }
      return;
    }
    // Otherwise, find link based on title from existing links
    const existingLink = Links.find((l) => l.title === link.title);
    if (existingLink) {
      // Merge arrays
      if (link.sublinks && existingLink.sublinks) {
        existingLink.sublinks = existingLink.sublinks.concat(link.sublinks);
      } else {
        existingLink.sublinks = link.sublinks;
      }
    } else {
      Links.push(link);
    }
  });
};

export default Links;
export { ProfileLinks, MergeLinks, FooterLinks };
