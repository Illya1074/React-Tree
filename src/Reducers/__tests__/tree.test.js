import reducer from '../tree'
// import * as types from '../../constants/ActionTypes'


describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([
        [
            {
                id: expect.any(Number),
                title: 'life', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(Number),
                        title: 'books',
                        icon: 'file',
                        state: true,
                        items: [
                            {
                                id: expect.any(Number),
                                title: 'science',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(Number),
                                title: 'it',
                                icon: 'file',
                                state: true,
                                items: []
                            },
                            {
                                id: expect.any(Number),
                                title: 'poem',
                                icon: 'file',
                                state: true,
                                items: []
                            }
                        ]
                    },
                    {
                      id: expect.any(Number),
                      title: 'school',
                      icon: 'file',
                      state: true,
                      items: [
                          {
                              id: expect.any(Number),
                              title: 'math',
                              icon: 'file',
                              state: true,
                              items: []
                          },
                          {
                              id: expect.any(Number),
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
                id: expect.any(Number),
                title: 'shop', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(Number),
                        title: 'bread',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(Number),
                title: 'myday', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(Number),
                        title: 'homework',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
                id: expect.any(Number),
                title: 'job', 
                icon: 'folder',
                state: true,
                items: [
                    {
                        id: expect.any(Number),
                        title: 'computer',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            }
        ]
      ])
    })      
})