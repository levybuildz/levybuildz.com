import { allPosts } from 'contentlayer/generated'
import { slug } from '@/shared/lib/slug'
import { removeRepeatedValuesFromArray } from '@/shared/lib/remove-repeated-values-from-array'
import { getFrequencyOfValue } from '@/shared/lib/get-frequency-of-value'

const getRawTagListFromPosts = (): string[] => {
  const listOfTagList = allPosts
    .filter(post => !post.test)
    .map(post => {
      return post.tags.split(',')
    })

  let completeRawTagList: string[] = []

  listOfTagList.forEach(tagList => {
    tagList.forEach(tag => completeRawTagList.push(tag.trim()))
  })

  return completeRawTagList
}

export const getUniqueTagListFromPosts = () =>
  removeRepeatedValuesFromArray(getRawTagListFromPosts())

export interface TagsAndNumberOfPosts {
  tag: string
  numberOfPosts: number
}
export function getTagsAndNumberOfPosts(): TagsAndNumberOfPosts[] {
  const rawTagList = getRawTagListFromPosts()
  const uniqueTagList = getUniqueTagListFromPosts()

  const tagsAndNumberOfPosts = uniqueTagList.map(tag => {
    const numberOfPosts = getFrequencyOfValue(rawTagList, tag)

    return {
      tag,
      numberOfPosts
    }
  })

  return tagsAndNumberOfPosts
}

export function getPostListBasedOnTag(tag: string) {
  const filteredPostList = allPosts.filter(post => {
    const listOfTags = post.tags.split(',').map(rawTag => slug(rawTag.trim()))
    return listOfTags.includes(slug(tag))
  })

  return filteredPostList
}

export function getNormalTagString(tag: string) {
  const allTags = getUniqueTagListFromPosts()

  return allTags.find(currTag => slug(currTag) === slug(tag))
}
