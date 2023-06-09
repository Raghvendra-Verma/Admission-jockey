export const  MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-manager`,
            type: "link",
            title: "Property Managers",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Guest Users",
          },
          {
            path: `editor`,
            type: "link",
            title: "Editors",
          },
          {
            path: `cyber-partner`,
            type: "link",
            title: "Cyber Partners",
          },
          {
            path: `caller`,
            type: "link",
            title: "Callers",
          }
        ],
      },
      {
        title: "College",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/college-list`,
            type: "link",
            title: "All College",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Add College",
          }
        ],
      },
      {
        title: "Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/add-property`,
            type: "link",
            title: "University Properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "College properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "Online Learning",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "Eduversity",
          },
          {
            path: `/add-property`,
            type: "link",
            title: "Add Property",
          },
      
        ],
      }
    ],
  },
  {
    menutitle: "Other Features",
    Items: [
      {
        title: "Status",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/status`,
            type: "link",
            title: "Status",
          }
        ],
      },
      {
        title: "Property Type",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-type`,
            type: "link",
            title: "Property Type",
          }
        ],
      },
      {
        title: "Categories",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/category`,
            type: "link",
            title: "Category",
          }
        ],
      }
     
    ],
  },

];

export const  MENUITEMS2 = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [
    
      {
        title: "College",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/college-list`,
            type: "link",
            title: "All College",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Add College",
          }
        ],
      }
    ],
  },
  {
    menutitle: "Other Features",
    Items: [
      {
        title: "Status",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/status`,
            type: "link",
            title: "Status",
          }
        ],
      }
     
    ],
  },
 
];
