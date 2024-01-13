import { useState, useEffect, useRef } from "react";
import Tree from "react-d3-tree";
import { useSelector } from "react-redux";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

export default function Tree2(props) {
  const [translate, setTranslate] = useState({});
  const treeContainerRef = useRef(null);
  const { level, treeParams } = useSelector(x=>{
    return {
      level: x.level,
      treeParams: x.treeParams,
    }
  })
  const debugData = [
    {
      name: props.user1?.toUpperCase(),
      attributes: {
        Level: "0",
      },
      children: [
        {
          name: props.user2?.toUpperCase(),
          attributes: {
            Level: "1",
          },
          children: [
            {
              name: props.user4?.toUpperCase(),
              attributes: {
                Level: "2",
              },
              children: [
                {
                  name: props.user8?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user16?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user32?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user64?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user128?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user256?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user257?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user129?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user258?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user259?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user65?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user130?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user260?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user261?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user131?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user262?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user263?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user33?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user66?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user132?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user264?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user265?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user133?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user266?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user267?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user67?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user134?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user268?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user269?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user135?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user270?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user271?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user17?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user34?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user68?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user136?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user272?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user273?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user137?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user274?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user275?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user69?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user138?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user276?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user277?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user139?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user278?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user279?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user35?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user70?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user140?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user280?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user281?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user141?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user282?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user283?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user71?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user142?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user284?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user285?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user143?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user286?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user287?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: props.user9?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user18?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user36?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user72?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user144?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user288?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user289?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user145?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user290?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user291?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user73?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user146?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user292?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user293?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user147?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user294?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user295?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user37?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user74?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user148?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user296?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user297?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user149?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user298?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user299?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user75?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user150?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user300?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user301?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user151?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user302?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user303?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user19?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user38?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user76?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user152?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user304?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user305?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user153?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user306?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user307?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user77?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user154?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user308?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user309?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user155?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user310?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user311?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user39?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user78?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user156?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user312?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user313?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user157?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user314?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user315?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user79?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user158?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user316?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user317?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user159?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user318?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user319?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: props.user5?.toUpperCase(),
              attributes: {
                Level: "2",
              },
              children: [
                {
                  name: props.user10?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user20?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user40?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user80?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user160?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user320?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user321?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user161?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user322?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user323?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user81?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user162?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user324?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user325?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user163?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user326?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user327?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user41?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user82?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user164?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user328?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user329?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user165?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user330?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user331?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user83?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user166?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user332?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user333?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user167?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user334?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user335?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user21?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user42?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user84?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user168?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user336?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user337?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user169?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user338?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user339?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user85?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user170?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user340?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user341?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user171?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user342?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user343?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user43?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user86?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user172?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user344?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user345?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user173?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user346?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user347?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user87?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user174?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user348?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user349?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user175?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user350?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user351?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: props.user11?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user22?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user44?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user88?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user176?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user352?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user353?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user177?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user354?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user355?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user89?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user178?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user356?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user357?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user179?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user358?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user359?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user45?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user90?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user180?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user360?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user361?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user181?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user362?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user363?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user91?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user182?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user364?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user365?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user183?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user366?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user367?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user23?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user46?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user92?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user184?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user368?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user369?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user185?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user370?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user371?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user93?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user186?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user372?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user373?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user187?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user374?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user375?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user47?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user94?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user188?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user376?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user377?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user189?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user378?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user379?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user95?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user190?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user380?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user381?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user191?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user382?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user383?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: props.user3?.toUpperCase(),
          attributes: {
            Level: "1",
          },
          children: [
            {
              name: props.user6?.toUpperCase(),
              attributes: {
                Level: "2",
              },
              children: [
                {
                  name: props.user12?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user24?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user48?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user96?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user192?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user384?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user385?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user193?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user386?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user387?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user97?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user194?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user388?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user389?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user195?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user390?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user391?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user49?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user98?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user196?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user392?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user393?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user197?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user394?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user395?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user99?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user198?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user396?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user397?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user199?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user398?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user399?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user25?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user50?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user100?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user200?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user400?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user401?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user201?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user402?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user403?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user101?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user202?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user404?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user405?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user203?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user406?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user407?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user51?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user102?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user204?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user408?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user409?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user205?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user410?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user411?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user103?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user206?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user412?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user413?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user207?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user414?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user415?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: props.user13?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user26?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user52?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user104?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user208?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user416?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user417?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user209?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user418?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user419?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user105?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user210?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user420?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user421?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user211?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user422?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user423?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user53?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user106?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user212?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user424?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user425?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user213?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user426?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user427?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user107?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user214?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user428?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user429?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user215?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user430?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user431?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user27?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user54?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user108?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user216?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user432?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user433?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user217?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user434?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user435?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user109?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user218?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user436?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user437?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user219?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user438?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user439?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user55?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user110?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user220?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user440?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user441?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user221?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user442?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user443?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user111?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user222?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user444?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user445?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user223?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user446?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user447?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: props.user7?.toUpperCase(),
              attributes: {
                Level: "2",
              },
              children: [
                {
                  name: props.user14?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user28?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user56?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user112?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user224?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user448?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user449?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user225?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user450?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user451?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user113?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user226?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user452?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user453?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user227?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user454?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user455?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user57?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user114?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user228?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user456?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user457?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user229?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user458?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user459?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user115?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user230?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user460?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user461?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user231?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user462?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user463?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user29?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user58?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user116?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user232?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user464?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user465?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user233?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user466?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user467?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user117?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user234?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user468?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user469?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user235?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user470?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user471?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user59?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user118?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user236?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user472?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user473?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user237?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user474?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user475?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user119?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user238?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user476?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user477?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user239?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user478?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user479?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: props.user15?.toUpperCase(),
                  attributes: {
                    Level: "3",
                  },
                  children: [
                    {
                      name: props.user30?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user60?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user120?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user240?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user480?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user481?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user241?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user482?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user483?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user121?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user242?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user484?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user485?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user243?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user486?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user487?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user61?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user122?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user244?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user488?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user489?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user245?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user490?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user491?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user123?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user246?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user492?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user493?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user247?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user494?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user495?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: props.user31?.toUpperCase(),
                      attributes: {
                        Level: "4",
                      },
                      children: [
                        {
                          name: props.user62?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user124?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user248?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user496?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user497?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user249?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user498?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user499?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user125?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user250?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user500?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user501?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user251?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user502?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user503?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: props.user63?.toUpperCase(),
                          attributes: {
                            Level: "5",
                          },
                          children: [
                            {
                              name: props.user126?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user252?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user504?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user505?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user253?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user506?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user507?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: props.user127?.toUpperCase(),
                              attributes: {
                                Level: "6",
                              },
                              children: [
                                {
                                  name: props.user254?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user508?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user509?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                                {
                                  name: props.user255?.toUpperCase(),
                                  attributes: {
                                    Level: "7",
                                  },
                                  children: [
                                    {
                                      name: props.user510?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                    {
                                      name: props.user511?.toUpperCase(),
                                      attributes: {
                                        Level: "8",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const debugData2 = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
                collapsed: true, // set `collapsed` to true to initially collapse the node
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
                collapsed: true, // set `collapsed` to true to initially collapse the node
              },
            ],
          },
        ],
      },
    ],
  };
  const [treeData, setTreeData] = useState(debugData);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const dimensions = treeContainerRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 1,
        y: dimensions.height / 1,
      });
      setTreeData(debugData);
    }, 500);
    return () => clearTimeout(timeout);
  }, [
    treeParams,
    props.user1,
    props.user2,
    props.user3,
    props.user4,
    props.user5,
    props.user6,
    props.user7,
    props.user8,
    props.user9,
    props.user10,
    props.user11,
    props.user12,
    props.user13,
    props.user14,
    props.user15,
    props.user16,
    props.user17,
    props.user18,
    props.user19,
    props.user20,
    props.user21,
    props.user22,
    props.user23,
    props.user24,
    props.user25,
    props.user26,
    props.user27,
    props.user28,
    props.user29,
    props.user30,
    props.user31,
    props.user32,
    props.user33,
    props.user34,
    props.user35,
    props.user36,
    props.user37,
    props.user38,
    props.user39,
    props.user40,
    props.user41,
    props.user42,
    props.user43,
    props.user44,
    props.user45,
    props.user46,
    props.user47,
    props.user48,
    props.user49,
    props.user50,
    props.user51,
    props.user52,
    props.user53,
    props.user54,
    props.user55,
    props.user56,
    props.user57,
    props.user58,
    props.user59,
    props.user60,
    props.user61,
    props.user62,
    props.user63,
    props.user64,
    props.user65,
    props.user66,
    props.user67,
    props.user68,
    props.user69,
    props.user70,
    props.user71,
    props.user72,
    props.user73,
    props.user74,
    props.user75,
    props.user76,
    props.user77,
    props.user78,
    props.user79,
    props.user80,
    props.user81,
    props.user82,
    props.user83,
    props.user84,
    props.user85,
    props.user86,
    props.user87,
    props.user88,
    props.user89,
    props.user90,
    props.user91,
    props.user92,
    props.user93,
    props.user94,
    props.user95,
    props.user96,
    props.user97,
    props.user98,
    props.user99,
    props.user100,
    props.user101,
    props.user102,
    props.user103,
    props.user104,
    props.user105,
    props.user106,
    props.user107,
    props.user108,
    props.user109,
    props.user110,
    props.user111,
    props.user112,
    props.user113,
    props.user114,
    props.user115,
    props.user116,
    props.user117,
    props.user118,
    props.user119,
    props.user120,
    props.user121,
    props.user122,
    props.user123,
    props.user124,
    props.user125,
    props.user126,
    props.user127,
    props.user128,
    props.user129,
    props.user130,
    props.user131,
    props.user132,
    props.user133,
    props.user134,
    props.user135,
    props.user136,
    props.user137,
    props.user138,
    props.user139,
    props.user140,
    props.user141,
    props.user142,
    props.user143,
    props.user144,
    props.user145,
    props.user146,
    props.user147,
    props.user148,
    props.user149,
    props.user150,
    props.user151,
    props.user152,
    props.user153,
    props.user154,
    props.user155,
    props.user156,
    props.user157,
    props.user158,
    props.user159,
    props.user160,
    props.user161,
    props.user162,
    props.user163,
    props.user164,
    props.user165,
    props.user166,
    props.user167,
    props.user168,
    props.user169,
    props.user170,
    props.user171,
    props.user172,
    props.user173,
    props.user174,
    props.user175,
    props.user176,
    props.user177,
    props.user178,
    props.user179,
    props.user180,
    props.user181,
    props.user182,
    props.user183,
    props.user184,
    props.user185,
    props.user186,
    props.user187,
    props.user188,
    props.user189,
    props.user190,
    props.user191,
    props.user192,
    props.user193,
    props.user194,
    props.user195,
    props.user196,
    props.user197,
    props.user198,
    props.user199,
    props.user200,
    props.user201,
    props.user202,
    props.user203,
    props.user204,
    props.user205,
    props.user206,
    props.user207,
    props.user208,
    props.user209,
    props.user210,
    props.user211,
    props.user212,
    props.user213,
    props.user214,
    props.user215,
    props.user216,
    props.user217,
    props.user218,
    props.user219,
    props.user220,
    props.user221,
    props.user222,
    props.user223,
    props.user224,
    props.user225,
    props.user226,
    props.user227,
    props.user228,
    props.user229,
    props.user230,
    props.user231,
    props.user232,
    props.user233,
    props.user234,
    props.user235,
    props.user236,
    props.user237,
    props.user238,
    props.user239,
    props.user240,
    props.user241,
    props.user242,
    props.user243,
    props.user244,
    props.user245,
    props.user246,
    props.user247,
    props.user248,
    props.user249,
    props.user250,
    props.user251,
    props.user252,
    props.user253,
    props.user254,
    props.user255,
    props.user256,
    props.user257,
    props.user258,
    props.user259,
    props.user260,
    props.user261,
    props.user262,
    props.user263,
    props.user264,
    props.user265,
    props.user266,
    props.user267,
    props.user268,
    props.user269,
    props.user270,
    props.user271,
    props.user272,
    props.user273,
    props.user274,
    props.user275,
    props.user276,
    props.user277,
    props.user278,
    props.user279,
    props.user280,
    props.user281,
    props.user282,
    props.user283,
    props.user284,
    props.user285,
    props.user286,
    props.user287,
    props.user288,
    props.user289,
    props.user290,
    props.user291,
    props.user292,
    props.user293,
    props.user294,
    props.user295,
    props.user296,
    props.user297,
    props.user298,
    props.user299,
    props.user300,
    props.user301,
    props.user302,
    props.user303,
    props.user304,
    props.user305,
    props.user306,
    props.user307,
    props.user308,
    props.user309,
    props.user310,
    props.user311,
    props.user312,
    props.user313,
    props.user314,
    props.user315,
    props.user316,
    props.user317,
    props.user318,
    props.user319,
    props.user320,
    props.user321,
    props.user322,
    props.user323,
    props.user324,
    props.user325,
    props.user326,
    props.user327,
    props.user328,
    props.user329,
    props.user330,
    props.user331,
    props.user332,
    props.user333,
    props.user334,
    props.user335,
    props.user336,
    props.user337,
    props.user338,
    props.user339,
    props.user340,
    props.user341,
    props.user342,
    props.user343,
    props.user344,
    props.user345,
    props.user346,
    props.user347,
    props.user348,
    props.user349,
    props.user350,
    props.user351,
    props.user352,
    props.user353,
    props.user354,
    props.user355,
    props.user356,
    props.user357,
    props.user358,
    props.user359,
    props.user360,
    props.user361,
    props.user362,
    props.user363,
    props.user364,
    props.user365,
    props.user366,
    props.user367,
    props.user368,
    props.user369,
    props.user370,
    props.user371,
    props.user372,
    props.user373,
    props.user374,
    props.user375,
    props.user376,
    props.user377,
    props.user378,
    props.user379,
    props.user380,
    props.user381,
    props.user382,
    props.user383,
    props.user384,
    props.user385,
    props.user386,
    props.user387,
    props.user388,
    props.user389,
    props.user390,
    props.user391,
    props.user392,
    props.user393,
    props.user394,
    props.user395,
    props.user396,
    props.user397,
    props.user398,
    props.user399,
    props.user400,
    props.user401,
    props.user402,
    props.user403,
    props.user404,
    props.user405,
    props.user406,
    props.user407,
    props.user408,
    props.user409,
    props.user410,
    props.user411,
    props.user412,
    props.user413,
    props.user414,
    props.user415,
    props.user416,
    props.user417,
    props.user418,
    props.user419,
    props.user420,
    props.user421,
    props.user422,
    props.user423,
    props.user424,
    props.user425,
    props.user426,
    props.user427,
    props.user428,
    props.user429,
    props.user430,
    props.user431,
    props.user432,
    props.user433,
    props.user434,
    props.user435,
    props.user436,
    props.user437,
    props.user438,
    props.user439,
    props.user440,
    props.user441,
    props.user442,
    props.user443,
    props.user444,
    props.user445,
    props.user446,
    props.user447,
    props.user448,
    props.user449,
    props.user450,
    props.user451,
    props.user452,
    props.user453,
    props.user454,
    props.user455,
    props.user456,
    props.user457,
    props.user458,
    props.user459,
    props.user460,
    props.user461,
    props.user462,
    props.user463,
    props.user464,
    props.user465,
    props.user466,
    props.user467,
    props.user468,
    props.user469,
    props.user470,
    props.user471,
    props.user472,
    props.user473,
    props.user474,
    props.user475,
    props.user476,
    props.user477,
    props.user478,
    props.user479,
    props.user480,
    props.user481,
    props.user482,
    props.user483,
    props.user484,
    props.user485,
    props.user486,
    props.user487,
    props.user488,
    props.user489,
    props.user490,
    props.user491,
    props.user492,
    props.user493,
    props.user494,
    props.user495,
    props.user496,
    props.user497,
    props.user498,
    props.user499,
    props.user500,
    props.user501,
    props.user502,
    props.user503,
    props.user504,
    props.user505,
    props.user506,
    props.user507,
    props.user508,
    props.user509,
    props.user510,
    props.user511,
  ]);



  // Define a callback function to handle node toggles
  const handleNodeToggle = (event, nodeData) => {
    const { target } = event;
    const isCollapsed = target.getAttribute("aria-expanded") === "false";
    nodeData.collapsed = !isCollapsed;
    setTreeData({ ...treeData });
  };

  return (
    <div className="h-20" style={containerStyles} ref={treeContainerRef}>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 100, y: 100 }}
        // pathFunc="step"
        collapsible={true}
        onNodeToggle={handleNodeToggle}
        initialDepth={level}
        depthFactor={510}
      />
    </div>
  );
}
