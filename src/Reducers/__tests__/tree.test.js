import reducer from '../tree'
import * as types from '../../Actions/todoActions'


describe('todos reducer', () => {
    
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: expect.any(String),
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
            
        ])
    })      

    it('should handle ADD_NODE', () => {
        expect(
          reducer(undefined, {
            type: 'ADD_NODE',
            id: '45abc6'
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: [
                                    {
                                        id: expect.any(String),
                                        title: 'new item',
                                        icon: 'file',
                                        state: true,
                                        items: []
                                    }
                                ]
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: expect.any(String),
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
            
        ])      
      })

      it('should handle DELETE_NODE', () => {
        expect(
          reducer(undefined, {
            type: 'DELETE_NODE',
            id: '7y689e'
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: expect.any(String),
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
            
        ]) 
      })


      it('should handle EDIT_TITLE', () => {
        expect(
          reducer(undefined, {
            type: 'EDIT_TITLE',
            id: '45abc6',
            val: 'new title'
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: '45abc6',
                                title: 'new title',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: expect.any(String),
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
            
        ])
      })

      
      it('should handle OPEN', () => {
        expect(
          reducer(undefined, {
            type: 'OPEN',
            id: '45abc6'
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: '45abc6',
                                title: 'science',
                                icon: 'file',
                                state: false,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: expect.any(String),
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }  
        ])
      })
      
      //DRAG_AND_DROP

      it('should handle Drag and Drop case 1', () => {
        expect(
          reducer(undefined, {
            type: 'DRAG_AND_DROP',
            itemFromId: {
                id: '45abc6',
                title: 'science',
                icon: 'file',
                state: true,
                items: []
            },
            itemTo: {
                id: '6f5gd3',
                title: 'school',
                icon: 'file',
                state: true,
                items: [
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'math',
                        icon: 'file',
                        state: true,
                        items: []
                    },
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'physic',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                    id: '6f5gd3',
                    title: 'school',
                    icon: 'file',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'math',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'physic',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: '45abc6',
                            title: 'science',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }  
        ])
      })

      it('should handle Drag and Drop case 2', () => {
        expect(
          reducer(undefined, {
            type: 'DRAG_AND_DROP',
            itemFromId: {
                id: '6f5gd3',
                title: 'school',
                icon: 'file',
                state: true,
                items: [
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'math',
                        icon: 'file',
                        state: true,
                        items: []
                    },
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'physic',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            itemTo: {
                id: '45abc6',
                title: 'science',
                icon: 'file',
                state: true,
                items: []
            }
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: '45abc6',
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: [
                                    {
                                        id: '6f5gd3',
                                        title: 'school',
                                        icon: 'file',
                                        state: true,
                                        items: [
                                            {
                                                id: expect.any(String),
                                                title: 'math',
                                                icon: 'file',
                                                state: true,
                                                items: []
                                            },
                                            {
                                                id: expect.any(String),
                                                title: 'physic',
                                                icon: 'file',
                                                state: true,
                                                items: []
                                            }
                                            
                                        ]
                                        }
                                ]
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }  
        ])
      })

      it('should handle Drag and Drop case 3', () => {
        expect(
          reducer(undefined, {
            type: 'DRAG_AND_DROP',
            itemFromId: {
                id: '6f5gd3',
                title: 'school',
                icon: 'file',
                state: true,
                items: [
                    {
                        id: '7h568h',
                        title: 'math',
                        icon: 'file',
                        state: true,
                        items: []
                    },
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'physic',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            itemTo: {
                id: '7h568h',
                title: 'math',
                icon: 'file',
                state: true,
                items: []
            }
          })
        ).toEqual([
            {
                id: expect.any(String),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: '45abc6',
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                        id: '6f5gd3',
                        title: 'school',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'math',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'physic',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                            
                        ]
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(String),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(String),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }  
        ])
      })

      it('should handle Drag and Drop case 4', () => {
        expect(
          reducer(undefined, {
            type: 'DRAG_AND_DROP',
            itemFromId: {
                id: '5t623r',
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            itemTo: {
                id: '7y689e',
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
          })
        ).toEqual(
            [
                {
                    id: expect.any(String),
                    title: 'life', 
                    icon: 'folder',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'books',
                            icon: 'file',
                            state: true,
                            items: [
                                {
                                    id: expect.any(String),
                                    title: 'science',
                                    icon: 'file',
                                    state: true,
                                    items: []
                                },
                                {
                                    id: expect.any(String),
                                    title: 'it',
                                    icon: 'file',
                                    state: true,
                                    items: []
                                },
                                {
                                    id: expect.any(String),
                                    title: 'poem',
                                    icon: 'file',
                                    state: true,
                                    items: []
                                }
                            ]
                        },
                        {
                        id: expect.any(String),
                        title: 'school',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(String),
                                title: 'math',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(String),
                                title: 'physic',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                        }
                    ]
                },
                {
                    id: expect.any(String),
                    title: 'myday', 
                    icon: 'folder',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'homework',
                            icon: 'file',
                            state: true,
                            items: []
                        },
                        {
                            id: expect.any(String),
                            title: 'shop', 
                            icon: 'folder',
                            state: true,
                            items: [
                                {
                                    id: expect.any(String),
                                    title: 'bread',
                                    icon: 'file',
                                    state: true,
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: expect.any(String),
                    title: 'job', 
                    icon: 'folder',
                    state: true,
                    items: [
                        {
                            id: expect.any(String),
                            title: 'computer',
                            icon: 'file',
                            state: true,
                            items: []
                        }
                    ]
                }
                
            ]
        )
      })

      

})